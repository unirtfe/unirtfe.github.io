part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode2() => ArrugasChapterRouter(
      nextEpisode: 2,
      imagePath: Assets.images.episodes.episode2.episode2View1.path,
      maximumImageAvailables: 35,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      onChapterEnd: continueDialog,
      musicChangeSteps: {
        9: () => Future.value(ArrugasBackgroundMusic.animate.toEntity()),
      }, 
    );
