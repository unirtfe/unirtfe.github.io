#!/usr/bin/env bash
find lib -type f -name '*.g.dart' -delete
flutter clean cache
flutter packages pub get  
flutter packages pub run build_runner build --delete-conflicting-outputs

