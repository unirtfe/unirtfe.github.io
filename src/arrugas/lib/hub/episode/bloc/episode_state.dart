part of 'episode_bloc.dart';

@immutable
sealed class EpisodeState {
  const EpisodeState({
    required EpisodeViewData? stateData,
  }) : data = stateData ?? const EpisodeViewData();
  final EpisodeViewData data;
  EpisodeState copyWith({
    EpisodeViewData? stateData,
  });
}

final class EpisodeFullErrorState extends EpisodeState {
  const EpisodeFullErrorState({super.stateData});

  @override
  EpisodeState copyWith({
    EpisodeViewData? stateData,
  }) {
    return EpisodeFullErrorState(stateData: stateData);
  }
}

final class EpisodeLoadingState extends EpisodeState {
  const EpisodeLoadingState({super.stateData});

  @override
  EpisodeState copyWith({
    EpisodeViewData? stateData,
  }) {
    return EpisodeLoadingState(stateData: stateData);
  }
}

final class EpisodeLoadedState extends EpisodeState {
  const EpisodeLoadedState({required super.stateData});

  @override
  EpisodeState copyWith({
    EpisodeViewData? stateData,
  }) {
    return EpisodeLoadedState(stateData: stateData);
  }
}

final class EpisodeEpisodeEndState extends EpisodeState {
  const EpisodeEpisodeEndState({required super.stateData});

  @override
  EpisodeState copyWith({
    EpisodeViewData? stateData,
  }) {
    return EpisodeLoadedState(stateData: stateData);
  }
}
