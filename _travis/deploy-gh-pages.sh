#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" == "true" ]]; then
echo "This is a pull request. No deployment will be done.";
  exit 0;
fi
if [[ "$TRAVIS_BRANCH" != "master" ]] && [[ "$TRAVIS_BRANCH" != "staging" ]]; then
echo "This is not a deployable branch.";
  exit 0;
fi

echo "BUMP HELLO WORLD set up $GH_REPO [via travis] for $GIT_NAME <${GIT_EMAIL}>"
export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"
git config user.name "Travis-CI"
git config user.email "travis@travis-ci.org"

# Git
git checkout -b gh-pages
lastCommit=$(git log --oneline | head -n 1)

echo "=STATUS="
git status

echo "=COMMIT="
echo "MESSAGE :" $lastCommit

git add . --verbose
git add --force --verbose build
git add --force --verbose bower_components
git commit -q -m "Travis build $TRAVIS_BUILD_NUMBER"

echo "=PUSH STATUS="
git status
git push --force --quiet "$REPO_URL" gh-pages > /dev/null 2>&1
