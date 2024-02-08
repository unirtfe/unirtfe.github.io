part of 'episode_bloc.dart';

@immutable
sealed class EpisodeEvent {
  const EpisodeEvent();
}

final class EpisodeInitialEvent extends EpisodeEvent {
  const EpisodeInitialEvent({
    required this.viewArguments,
    required this.context,
  });

  final ArrugasChapterRouter viewArguments;
  final BuildContext context;
}

final class EpisodeNextPageEvent extends EpisodeEvent {
  const EpisodeNextPageEvent._({required this.addition, required this.context});

  factory EpisodeNextPageEvent.next(BuildContext context) =>
      EpisodeNextPageEvent._(addition: 1, context: context);

  factory EpisodeNextPageEvent.previous(BuildContext context) =>
      EpisodeNextPageEvent._(addition: -1, context: context);

  final int addition;
  final BuildContext context;
}
