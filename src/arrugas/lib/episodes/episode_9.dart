part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode9() => ArrugasChapterRouter(
      nextEpisode: 9,
      imagePath: Assets.images.episodes.episode9.episode9View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 40,
      onChapterEnd: continueDialog,
      musicChangeSteps: {
        32: () => Future.value(ArrugasBackgroundMusic.hope.toEntity()),
      },
    );
