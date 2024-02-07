part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode10() => ArrugasChapterRouter(
      nextEpisode: 10,
      imagePath: Assets.images.episodes.episode10.episode10View1.path,
      maximumImageAvailables: 48,
      onChapterEnd: continueDialog,
      backgroundMusic: BackgroundMusic.hope,
      musicChangeSteps: {
        3: () => Future.value(BackgroundMusic.defaultEpisode),
        6: () => Future.value(BackgroundMusic.animate),
        10: () => Future.value(BackgroundMusic.defaultEpisode),
        15: () => Future.value(BackgroundMusic.animate),
        34: () => Future.value(BackgroundMusic.defaultEpisode),
      },
    );
