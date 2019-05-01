#!/usr/bin/env bash


set -e

export VERSION=$(/bin/bash ./increment_semver.sh -p $(cat ./version.py))

npm install -g npm-cli-login
rm -rf dist
pip install --user --upgrade setuptools wheel twine
python3 setup.py sdist bdist_wheel
python3 -m twine upload -u $NPM_USERNAME -p $NPM_PASS --verbose --repository-url https://upload.pypi.org/legacy/ dist/*
# expects  $NPM_USERNAME $NPM_PASS and $NPM_EMAIL env to be defined
npm-cli-login
npm version $VERSION
npm publish --access public
echo $VERSION > ./version.py
git tag $VERSION
