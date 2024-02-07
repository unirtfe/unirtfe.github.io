part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode1() => ArrugasChapterRouter(
      nextEpisode: 1,
      imagePath: Assets.images.episodes.episode1.episode1View1.path,
      maximumImageAvailables: 8,
      onChapterEnd: continueDialog,
      backgroundMusic: ArrugasBackgroundMusic.animate.toEntity(),
      stepGameTransition: <int, Future<void> Function(BuildContext context)>{},
      musicChangeSteps: {
        5: () => Future.value(ArrugasBackgroundMusic.defaultEpisode.toEntity()),
      },
    );
