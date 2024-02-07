import 'package:arrugas_domain/music/music_define.dart';

import '../../gen/assets.gen.dart';

enum SfxButtons {
  click(),
  menu(),
  open(),
  noMusic();

  const SfxButtons();

  MusicDefine toEntity() {
    final musicDefine = switch (this) {
      click => MusicDefine(
          musicPath: Assets.audio.music.settingClick,
          volume: 0.1,
        ),
      menu => MusicDefine(
          musicPath: Assets.audio.music.buttonClick,
          volume: 0.03,
        ),
      open => MusicDefine(
          musicPath: Assets.audio.music.settingClick,
          volume: 0.5,
        ),
      noMusic => MusicDefine(
          musicPath: '',
          volume: 0,
        ),
    };

    return musicDefine;
  }
}
