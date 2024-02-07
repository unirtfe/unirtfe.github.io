part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode5() => ArrugasChapterRouter(
      nextEpisode: 5,
      imagePath: Assets.images.episodes.episode5.episode5View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 18,
      onChapterEnd: continueDialog,
    );
