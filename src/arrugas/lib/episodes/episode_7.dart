part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode7() => ArrugasChapterRouter(
      nextEpisode: 7,
      imagePath: Assets.images.episodes.episode7.episode7View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 6,
      onChapterEnd: continueDialog,
    );
