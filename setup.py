#!/usr/bin/env python

from setuptools import setup, find_packages
from subprocess import check_output



setup(name='jupyterlab-spark-ui-tab',
      version= check_output("git describe --tags".split()).decode("utf-8").strip(),
      description='Spark UI extension for jupyterlab',
      author='Lior Baber',
      author_email='liorbaber@gmail.com',
      include_package_data=True,
      packages=find_packages(),
      license="apache-2.0",
      url = 'https://github.com/Liorba/jupyterlab-spark-ui-tab',
      keywords = ['jupyter', 'extension', 'spark'],
      classifiers = [
      'Intended Audience :: Developers',
      'License :: OSI Approved :: Apache Software License',
      'Programming Language :: Python :: 3',
          ],
      zip_safe=False,
      install_requires=[
          'bs4' ,
      ]
      )
