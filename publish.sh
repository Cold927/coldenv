#!/bin/bash

if grep -q "#!/usr/bin/env node" dist/cli.js; then
  echo "file already exists"
  exit 1
fi
if [ ! -f 'dist/cli.js' ];  then
  echo "Building..."
  nest build
  echo "Build complete!"

fi
echo "#!/usr/bin/env node" > dist/run.js
cat dist/cli.js >> dist/run.js
rm -f dist/cli.js
cp dist/run.js dist/cli.js
rm -f dist/run.js

git add dist/

echo "Run !!!"