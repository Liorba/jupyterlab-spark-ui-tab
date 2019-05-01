#!/usr/bin/env python

from setuptools import setup, find_packages

__version__  = ""
with open("version.py",'r') as f:
      __version__ = f.read().strip()
setup(name='jupyterlab-spark-ui-tab',
      version=__version__,
      description='Spark UI extension for jupyterlab',
      author='Lior Baber',
      author_email='liorbaber@gmail.com',
      include_package_data=True,
      packages=find_packages(),
      license="apache-2.0",
      url = 'https://github.com/Liorba/jupyterlab-spark-ui-tab',
      download_url = 'https://github.com/Liorba/jupyterlab-spark-ui-tab/archive/v0.0.1.tar.gz',
      keywords = ['jupyter', 'extension', 'spark'],
      classifiers = [
      'Intended Audience :: Developers',
      'License :: OSI Approved :: Apache Software License',
      'Programming Language :: Python :: 3',
          ],
      zip_safe=False,
      install_requires=[
          'bs4'
      ]
      )
