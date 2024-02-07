import 'package:arrugas_domain/episodes/episodes.dart';
import 'package:arrugas_layout/layout_rules.dart';
import 'package:arrugas_layout/screen_size_support.dart';
import 'package:flutter/services.dart';

import '../common/arrugas_sounds.dart';
import "../common/extensions/episodes_extension.dart";

import '../common/music/arrugas_background_music.dart';
import '../common/music/sfx_music.dart';
import '../episodes/episodes.dart';
import '../gen/assets.gen.dart';
import 'visual_components/actions.dart';
import '../l10n/l10n.dart';
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen>
    with LayoutRules, EpisodesName {
  @override
  void initState() {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
    if (arrugasSounds.isBackGroundPlaying) {
      arrugasSounds.playInBackground(
        replay: true,
        backgroundMusic: ArrugasBackgroundMusic.mainTheme.toEntity(),
      );
    }
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final l10n = context.l10n;

    final screenSize = MediaQuery.sizeOf(context);

    final ScreenSizeSupport size =
        obtainLayoutJumps(mediaQuery: MediaQuery.of(context));
    const double appBarMaxHeight = 200;

    final screenWidth = screenSize.width;
    return DecoratedBox(
      decoration: BoxDecoration(
        color: Colors.white,
        image: DecorationImage(
          image: Assets.images.hubs.entrance.provider(),
          fit: BoxFit.cover,
        ),
      ),
      child: ColoredBox(
        color: Colors.white.withOpacity(0.8),
        child: SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxHeight: appBarMaxHeight),
                  child: Padding(
                    padding: const EdgeInsets.only(top: 32, bottom: 32),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Spacer(),
                        Assets.images.logos.personaje.image(
                          width: size.resolve<double>(
                            onSmall: () => screenWidth * 0.20,
                            onMedium: () => appBarMaxHeight * 0.6,
                            onLarge: () => appBarMaxHeight,
                          ),
                          fit: BoxFit.fitHeight,
                        ),
                        Assets.images.logos.arrugas.image(
                          width: size.resolve<double>(
                            onSmall: () => screenWidth * 0.50,
                            onMedium: () => appBarMaxHeight * 1.2,
                            onLarge: () => appBarMaxHeight * 2,
                          ),
                          fit: BoxFit.fitHeight,
                        ),
                        const Spacer(),
                        ArrugasAction(
                          type: SfxButtons.click,
                          onTap: () => arrugasSounds.playInBackground(
                            backgroundMusic:
                                ArrugasBackgroundMusic.mainTheme.toEntity(),
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(32),
                            child: StreamBuilder(
                              stream: arrugasSounds.backgroundPlayingStream,
                              builder: (context, isPlaying) {
                                return Icon(
                                  isPlaying.data ?? false
                                      ? Icons.volume_up
                                      : Icons.volume_off,
                                  size: size.resolve<double>(
                                    onSmall: () => 36,
                                    onMedium: () => 40,
                                    onLarge: () => 50,
                                  ),
                                );
                              },
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Expanded(
                child: ListView.separated(
                  padding: EdgeInsets.symmetric(
                    horizontal: size.resolve<double>(
                      onSmall: () => 32,
                      onMedium: () => screenWidth * 0.20,
                      onLarge: () => screenWidth * 0.3,
                    ),
                  ),
                  itemBuilder: (context, index) {
                    final currentEpisodeIndex = index + 1;
                    final String title = episodeTitleFromIndex(
                      l10n: l10n,
                      episode: currentEpisodeIndex,
                    );
                    return ArrugasAction(
                      type: SfxButtons.open,
                      onTap: () {
                        Navigator.of(context).pushReplacementNamed(
                          'episode',
                          arguments: episodesList[index],
                        );
                      },
                      child: ColoredBox(
                        color: Colors.white.withOpacity(0.5),
                        child: SizedBox(
                          width: 600,
                          child: Padding(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 20,
                            ),
                            child: Text(
                              '${l10n.episido_word} ${index + 1}:  $title',
                              style: const TextStyle(
                                fontSize: 24,
                                color: Colors.black,
                              ),
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                  separatorBuilder: (context, index) => const SizedBox(
                    height: 8,
                  ),
                  itemCount: Episodes.values.length,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
