#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='spark-ui-tab',
      version='0.0.1',
      description='Spark UI extension for jupyterlab',
      author='Lior Baber',
      author_email='liorbaber@gmail.com',
      include_package_data=True,
      packages=find_packages(),
      license="apache-2.0",
      url = 'https://github.com/Liorba/spark-ui-tab',
      download_url = 'https://github.com/Liorba/spark-ui-tab/archive/v0.1.tar.gz',
      keywords = ['jupyter', 'extension', 'spark'],
      classifiers = [
      'Development Status :: Beta',
      'Intended Audience :: Developers',
      'License :: OSI Approved :: apache-2.0',
      'Programming Language :: Python :: 3',
          ],
      zip_safe=False,
      install_requires=[
          'bs4'
      ]
      )
