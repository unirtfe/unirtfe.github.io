part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode11() => ArrugasChapterRouter(
      nextEpisode: 11,
      imagePath: Assets.images.episodes.episode11.episode11View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 16,
      onChapterEnd: continueDialog,
    );
