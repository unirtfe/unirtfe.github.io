library music_define;

final class MusicDefine {
  MusicDefine({
    required String musicPath,
    required this.volume,
  }) : path = musicPath.audioPath;

  final String path;
  final double volume;
}

extension RemoveDuplicatePath on String {
  String get audioPath => replaceAll('assets/audio/', '');
}
