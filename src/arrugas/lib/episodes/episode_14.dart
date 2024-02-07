part of 'episodes.dart';

ArrugasChapterRouter _initializeEpisode14() => ArrugasChapterRouter(
      nextEpisode: 14,
      imagePath: Assets.images.episodes.episode14.episode14View1.path,
      backgroundMusic: ArrugasBackgroundMusic.defaultEpisode.toEntity(),
      maximumImageAvailables: 3,
      onChapterEnd: returnHome,
    );

Future<void> returnHome(
  BuildContext context,
  int nextEpisode,
) =>
    showDialog(
      context: context,
      builder: (context) => Align(
        alignment: Alignment.center,
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: Colors.grey.shade300,
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Padding(
                  padding: EdgeInsets.only(bottom: 16),
                  child: Text(
                    'Fue un placer vivir estos momentos contigo',
                  ),
                ),
                ArrugasAction(
                  type: SfxButtons.open,
                  onTap: () => Navigator.of(context)
                      .pushNamedAndRemoveUntil('Main', (route) => false),
                  child: Padding(
                    padding: const EdgeInsets.all(32),
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        borderRadius:
                            const BorderRadius.all(Radius.circular(20)),
                        color: Colors.grey.shade200,
                      ),
                      child: const Padding(
                        padding: EdgeInsets.all(16),
                        child: Text('Salir'),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
