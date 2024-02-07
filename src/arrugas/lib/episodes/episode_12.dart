part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode12() => ArrugasChapterRouter(
      nextEpisode: 12,
      imagePath: Assets.images.episodes.episode12.episode12View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 20,
      onChapterEnd: continueDialog,
    );
