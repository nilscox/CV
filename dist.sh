#!/bin/sh

rm -rf build dist
mkdir dist

for l in en fr; do
  yarn data:"$l"
  yarn data:public
  yarn build

  cp -r build dist/"$l"
  cp src/data/cv.json dist/"$l"/CV-Nils-Layet.json

  yarn pdf
  mv CV-Nils-Layet.pdf dist/"$l"/CV-Nils-Layet.pdf
done

cp index.html dist

rm -rf build
