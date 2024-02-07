import 'package:arrugas_domain/music/music_define.dart';

import '../../gen/assets.gen.dart';

enum ArrugasBackgroundMusic {
  mainTheme(),
  animate(),
  christmas(),
  hope(),
  defaultEpisode();

  const ArrugasBackgroundMusic();

  MusicDefine toEntity() {
    final musicDefine = switch (this) {
      mainTheme => MusicDefine(
          musicPath: Assets.audio.music.pianoMoment,
          volume: 0.01,
        ),
      animate => MusicDefine(
          musicPath: Assets.audio.music.lazyAfternoon,
          volume: 0.01,
        ),
      christmas => MusicDefine(
          musicPath: Assets.audio.music.christmasStars,
          volume: 0.01,
        ),
      defaultEpisode => MusicDefine(
          musicPath: Assets.audio.music.relaxedWalk113607,
          volume: 0.01,
        ),
      hope => MusicDefine(
          musicPath: Assets.audio.music.soundsOfHope,
          volume: 0.1,
        )
    };

    return musicDefine;
  }
}
