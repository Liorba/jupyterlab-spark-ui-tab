#!/usr/bin/env bash


set -e

export VERSION=$(/bin/bash ./increment_semver.sh -p $(cat ./version.py))
echo $VERSION > ./version.py
#npm install -g npm-cli-login
#rm -rf dist
#pip install --user --upgrade setuptools wheel twine
#python3 setup.py sdist bdist_wheel
#python3 -m twine upload -u $NPM_USERNAME -p $NPM_PASS --verbose --repository-url https://upload.pypi.org/legacy/ dist/*
npm-cli-login -u $NPM_USERNAME -p $NPM_PASS -e $NPM_EMAIL
npm version $VERSION --force
npm publish --access public
git tag $VERSION
