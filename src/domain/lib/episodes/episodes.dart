import "package:collection/collection.dart";

enum Episodes {
  unDiaEnElBanco(1),
  elGeriatrico(2),
  unaManyanaCualquiera(3),
  ejercitandoElCuerpo(4),
  deliriosDeLaMente(5),
  ejercitandoLaMente(6),
  unDiaMas(7),
  navidad(8),
  alheizemer(9),
  negociacion(10),
  negacion(11),
  olvido(12),
  dorianExpress(13),
  elPerro(14),
  ;

  const Episodes(
    this.chapterEpisodeIndex,
  );
  final int chapterEpisodeIndex;

  static Episodes fromChapterEpisodeIndex({required int episode}) {
    return values.firstWhereOrNull(
          (element) => element.chapterEpisodeIndex == episode,
        ) ??
        unDiaEnElBanco;
  }

  T resolve<T>({
    required T Function() onChapter1,
    required T Function() onChapter2,
    required T Function() onChapter3,
    required T Function() onChapter4,
    required T Function() onChapter5,
    required T Function() onChapter6,
    required T Function() onChapter7,
    required T Function() onChapter8,
    required T Function() onChapter9,
    required T Function() onChapter10,
    required T Function() onChapter11,
    required T Function() onChapter12,
    required T Function() onChapter13,
    required T Function() onChapter14,
  }) {
    final chapter = switch (this) {
      Episodes.unDiaEnElBanco => onChapter1,
      Episodes.elGeriatrico => onChapter2,
      Episodes.unaManyanaCualquiera => onChapter3,
      Episodes.ejercitandoElCuerpo => onChapter4,
      Episodes.deliriosDeLaMente => onChapter5,
      Episodes.ejercitandoLaMente => onChapter6,
      Episodes.unDiaMas => onChapter7,
      Episodes.navidad => onChapter8,
      Episodes.alheizemer => onChapter9,
      Episodes.negociacion => onChapter10,
      Episodes.negacion => onChapter11,
      Episodes.olvido => onChapter12,
      Episodes.dorianExpress => onChapter13,
      Episodes.elPerro => onChapter14,
    };
    return chapter.call();
  }
}
