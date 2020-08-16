import {
    JupyterFrontEnd, JupyterFrontEndPlugin, LabShell
} from '@jupyterlab/application';
import { PageConfig } from '@jupyterlab/coreutils';
import {
    ICommandPalette, IFrame,
    MainAreaWidget,
} from '@jupyterlab/apputils';

// import * as React from 'react';
import '../style/index.css';
import {ReadonlyJSONObject} from '@lumino/coreutils';
import {toArray} from '@lumino/algorithm';


/**
 * Initialization data for the spark_ui_tab extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'spark_ui_tab',
    autoStart: true,
    requires: [ICommandPalette],
    activate

};

namespace CommandIDs {
    export const run = 'sparkui:run';
}

function activate(app: JupyterFrontEnd, palette: ICommandPalette): void {
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

            shell.add(main, 'main', {activate: args['activate'] as boolean});

            if (shell instanceof LabShell) {
                shell.layoutModified.connect(
                    () => {
                        // If there is only a launcher open, remove the close icon.
                        main.title.closable = toArray(shell.widgets('main')).length > 1;
                    },
                    main
                );
            }

            return main;
        }

    });
    palette.addItem({command: CommandIDs.run, category: 'Spark'});
}

class SparkUI extends IFrame {
    html:string;
    constructor(app: JupyterFrontEnd) {
        super();
        const baseUrl = PageConfig.getBaseUrl();
        this.url = baseUrl + 'sparkuitab/';
    }




}


export default extension;
