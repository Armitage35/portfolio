#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# clean up any existing git folder
rm -rf .git

git init
git config user.email "adrien.dubois35@gmail.com"
git config user.name "Adrien D. Ahlqvist"

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Armitage35/portfolio.git HEAD:gh-pages
