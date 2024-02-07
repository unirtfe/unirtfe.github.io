part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode10() => ArrugasChapterRouter(
      nextEpisode: 10,
      imagePath: Assets.images.episodes.episode10.episode10View1.path,
      maximumImageAvailables: 48,
      onChapterEnd: continueDialog,
      backgroundMusic: ArrugasBackgroundMusic.hope.toEntity(),
      musicChangeSteps: {
        3: () => Future.value(ArrugasBackgroundMusic.defaultEpisode.toEntity()),
        6: () => Future.value(ArrugasBackgroundMusic.animate.toEntity()),
        10: () =>
            Future.value(ArrugasBackgroundMusic.defaultEpisode.toEntity()),
        15: () => Future.value(ArrugasBackgroundMusic.animate.toEntity()),
        34: () =>
            Future.value(ArrugasBackgroundMusic.defaultEpisode.toEntity()),
      },
    );
