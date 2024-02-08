// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:arrugas_domain/music/music_define.dart';
import 'package:arrugas_domain/routes/arrugas_chapter_router.dart';

import '../visual_components/image_platform_management.dart';

class EpisodeViewData {
  const EpisodeViewData({
    this.initalViewArguments,
    this.currentImage = const ArrugasImage('_assetName'),
    this.backgroundMusic,
    this.currentSlide = 1,
  });
  final ArrugasChapterRouter? initalViewArguments;
  final ArrugasImage currentImage;
  final MusicDefine? backgroundMusic;

  final int currentSlide;

  String get currentCounter {
    final max = initalViewArguments?.maximumImageAvailables ?? 0;
    final current = currentSlide;

    return "$current/$max";
  }

  EpisodeViewData copyWith({
    ArrugasChapterRouter? viewArguments,
    ArrugasImage? currentImage,
    MusicDefine? backgroundMusic,
    int? currentSlide,
  }) {
    return EpisodeViewData(
      initalViewArguments: viewArguments ?? initalViewArguments,
      currentImage: currentImage ?? this.currentImage,
      backgroundMusic: backgroundMusic ?? this.backgroundMusic,
      currentSlide: currentSlide ?? this.currentSlide,
    );
  }
}
