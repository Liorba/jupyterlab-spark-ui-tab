import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';
import {
    ICommandPalette, IFrame,
    MainAreaWidget,
} from '@jupyterlab/apputils';

// import * as React from 'react';
import '../style/index.css';
import {ReadonlyJSONObject} from '@phosphor/coreutils';
import {toArray} from '@phosphor/algorithm';
import axios, {AxiosResponse} from 'axios';

/**
 * Initialization data for the spark-ui-tab extension.
 */
const extension: JupyterLabPlugin<void> = {
    id: 'spark-ui-tab',
    autoStart: true,
    requires: [ICommandPalette],
    activate

};

namespace CommandIDs {
    export const run = 'sparkui:run';
}

function activate(app: JupyterLab, palette: ICommandPalette): void {
    const {commands, shell} = app;
    console.log("in activate");

    commands.addCommand(CommandIDs.run, {
        label: 'spark UI',
        execute: (args: ReadonlyJSONObject) => {


            const sparkWidget = new SparkUI(app);

            sparkWidget.title.label = 'Open Spark UI';

            let main = new MainAreaWidget({content: sparkWidget});

            // If there are any other widgets open, remove the launcher close icon.
            main.title.closable = !!toArray(shell.widgets('main')).length;

            shell.addToMainArea(main, {activate: args['activate'] as boolean});

            shell.layoutModified.connect(
                () => {
                    // If there is only a launcher open, remove the close icon.
                    main.title.closable = toArray(shell.widgets('main')).length > 1;
                },
                main
            );

            return main;
        }

    });
    palette.addItem({command: CommandIDs.run, category: 'Spark'});
}

class SparkUI extends IFrame {

    constructor(app: JupyterLab) {
        super();
        this.url = app.info.urls.base + 'sparkuitab/';
        console.log("before axios");
        axios.get(this.url).then(res => this.isExists(res)).then(x => {
                if (!x) {
                    this.node.querySelector('iframe')!.srcdoc = "<h1>did not found spark session</h1>";
                }
            }
        );              
    }


    isExists(res: AxiosResponse<any>): Boolean {
        console.log(res.data!.error);
        if (res.status == 200){
            if (res.data!.error == "SPARK_UI_NOT_RUNNING"){
                return false;
            }
        }
        return true


    }

}


export default extension;
