#!/usr/bin/env bash
# Build the app and publish dist/ to the gh-pages branch (served by GitHub Pages).
# Usage: npm run deploy:pages
set -euo pipefail
npm run build
TMP=$(mktemp -d)
git worktree add --detach "$TMP" >/dev/null
(
  cd "$TMP"
  if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
    git fetch -q origin gh-pages && git checkout -q -B gh-pages FETCH_HEAD
  else
    git checkout -q --orphan gh-pages
  fi
  git rm -rqf . >/dev/null 2>&1 || true
  cp -r "$OLDPWD/dist/." .
  touch .nojekyll   # serve files as-is
  git add -A
  git commit -qm "Deploy OpenSC4 Range to GitHub Pages" || echo "Nothing changed"
  git push -q origin gh-pages
)
git worktree remove --force "$TMP"
echo "Published to the gh-pages branch."
