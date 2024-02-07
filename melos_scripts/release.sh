#!/usr/bin/env bash
rm -rf assets
rm -rf canvaskit 
rm -rf icons 
rm -rf .last_build_id
rm -rf favicon.png
rm -rf flutter*
rm -rf index.html 
rm -rf main.dart.js
rm -rf manifest.json
rm -rf version.json 

cd src/arrugas
flutter build web --release

