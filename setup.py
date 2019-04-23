#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='spark-ui-tab',
      version='0.0.1',
      description='Spark UI extension',
      author='Lior Baber',
      author_email='liorbaber@gmail.com',
      include_package_data=True,
      packages=find_packages(),
      zip_safe=False,
      install_requires=[
          'bs4'
      ],
      )
