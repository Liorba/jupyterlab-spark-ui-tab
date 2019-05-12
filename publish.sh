#!/usr/bin/env bash


set -e


npm install -g npm-cli-login
rm -rf dist
pip install --user --upgrade setuptools wheel twine
python3 setup.py sdist bdist_wheel
python3 -m twine upload -u $NPM_USERNAME -p $NPM_PASS --verbose --repository-url https://upload.pypi.org/legacy/ dist/*
npm-cli-login -u $NPM_USERNAME -p $NPM_PASS -e $NPM_EMAIL
npm --no-git-tag-version version  $(git describe --tags)
npm publish --access public
