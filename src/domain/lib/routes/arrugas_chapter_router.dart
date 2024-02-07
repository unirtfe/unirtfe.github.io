import 'dart:async';

import 'package:flutter/widgets.dart';

import '../music/music_define.dart';

final class ArrugasChapterRouter {
  const ArrugasChapterRouter({
    required this.imagePath,
    required this.nextEpisode,
    required this.maximumImageAvailables,
    required this.onChapterEnd,
    required this.backgroundMusic,
    this.stepGameTransition = const {},
    this.musicChangeSteps = const {},
  });

  final int nextEpisode;
  final String imagePath;
  final MusicDefine backgroundMusic;
  final int maximumImageAvailables;
  final Function(BuildContext context, int nextEpisode) onChapterEnd;
  final Map<int, Future<void> Function(BuildContext context)>
      stepGameTransition;

  final Map<int, Future<MusicDefine?> Function()> musicChangeSteps;
}
