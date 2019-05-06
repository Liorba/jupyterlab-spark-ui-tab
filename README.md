# spark-ui-tab

spark-ui-tab


## Prerequisites

* JupyterLab

## Installation
first install the python package:
```bash
pip install jupyterlab-spark-ui-tab
```
you need to install both the lab extension as well as the server extension:

```bash
jupyter labextension install @liorbaber/spark-ui-tab
jupyter serverextension install --py spark-ui-tab
```


## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

