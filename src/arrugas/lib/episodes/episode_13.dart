part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode13() => ArrugasChapterRouter(
      nextEpisode: 13,
      imagePath: Assets.images.episodes.episode13.episode13View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 4,
      onChapterEnd: continueDialog,
    );
