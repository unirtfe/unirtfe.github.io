import 'package:arrugas_domain/episodes/episodes.dart';

import '../../l10n/l10n.dart';

mixin EpisodesName {
  String episodeTitleFromIndex({
    required AppLocalizations l10n,
    required int episode,
  }) {
    final chapter = Episodes.fromChapterEpisodeIndex(
      episode: episode,
    );
    return chapter.resolve<String>(
      onChapter1: () => l10n.chapter1,
      onChapter2: () => l10n.chapter2,
      onChapter3: () => l10n.chapter3,
      onChapter4: () => l10n.chapter4,
      onChapter5: () => l10n.chapter5,
      onChapter6: () => l10n.chapter6,
      onChapter7: () => l10n.chapter7,
      onChapter8: () => l10n.chapter8,
      onChapter9: () => l10n.chapter9,
      onChapter10: () => l10n.chapter10,
      onChapter11: () => l10n.chapter11,
      onChapter12: () => l10n.chapter12,
      onChapter13: () => l10n.chapter13,
      onChapter14: () => l10n.chapter14,
    );
  }
}
