import 'package:arrugas_domain/music/music_define.dart';
import 'package:arrugas_domain/routes/arrugas_chapter_router.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../common/music/sfx_music.dart';
import '../visual_components/actions.dart';
import '../visual_components/settings_action.dart';
import 'bloc/episode_bloc.dart';
import 'episode_logic.dart';

class EpisodeContent extends StatefulWidget {
  const EpisodeContent({super.key});

  @override
  State<EpisodeContent> createState() => _EpisodeContentState();
}

class _EpisodeContentState extends State<EpisodeContent> {
  final logic = EpisodeLogic();

  @override
  void didChangeDependencies() {
    final viewArguments =
        ModalRoute.of(context)?.settings.arguments as ArrugasChapterRouter?;
    logic.events.onInitialEvent(viewArguments, context);
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ColoredBox(
        color: Colors.white,
        child: BlocConsumer<EpisodeBloc, EpisodeState>(
          listener: logic.listener,
          builder: (context, state) {
            if (state is EpisodeLoadingState) {
              return const Center(child: CircularProgressIndicator());
            }
            if (state is EpisodeFullErrorState) {
              return const Center(
                child: Text(
                  'Hubo un error cargando las imagenes. Intenelo de nuevo más tarde',
                ),
              );
            }

            final data = state.data;
            return Stack(
              children: [
                Align(
                  alignment: kIsWeb ? Alignment.center : Alignment.topCenter,
                  child: data.currentImage.image(
                    fit: BoxFit.fitHeight,
                  ),
                ),
                Align(
                  alignment: Alignment.bottomLeft,
                  child: SettingAction(
                    backgroundMusic: data.backgroundMusic ??
                        MusicDefine(musicPath: '', volume: 0),
                  ),
                ),
                Align(
                  alignment: Alignment.bottomRight,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      DecoratedBox(
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50)),
                          color: Colors.white38,
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(4),
                          child: Text(
                            data.currentCounter,
                            style: const TextStyle(
                              color: Colors.black26,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ),
                      if (kDebugMode)
                        ArrugasAction.fromIcon(
                          onTap: () {
                            logic.events.onPreviousEpisode(context);
                          },
                          icon: Icons.arrow_back_ios_new_rounded,
                          padding: const EdgeInsets.all(5),
                          type: SfxButtons.noMusic,
                        ),
                      ArrugasAction.fromIcon(
                        type: SfxButtons.noMusic,
                        onTap: () async {
                          logic.events.onNextEpisode(context);
                        },
                        padding: const EdgeInsets.symmetric(
                          horizontal: 24,
                          vertical: 10,
                        ),
                        icon: Icons.arrow_forward_ios_rounded,
                      ),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
