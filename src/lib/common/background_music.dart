import '../gen/assets.gen.dart';
import 'extensions/audio_path.dart';

enum BackgroundMusic {
  mainTheme(volume: 0.01),
  animate(volume: 0.01),
  christmas(volume: 0.01),
  hope(volume: 0.1),
  defaultEpisode(volume: 0.01);

  const BackgroundMusic({
    required this.volume,
  });
  final double volume;

  String toMusicPath() {
    final path = switch (this) {
      mainTheme => Assets.audio.music.pianoMoment,
      animate => Assets.audio.music.lazyAfternoon,
      christmas => Assets.audio.music.christmasStars,
      defaultEpisode => Assets.audio.music.relaxedWalk113607,
      hope => Assets.audio.music.soundsOfHope
    };

    return path.audioPath;
  }
}
