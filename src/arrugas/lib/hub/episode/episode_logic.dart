import 'package:arrugas_domain/routes/arrugas_chapter_router.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'bloc/episode_bloc.dart';

final class EpisodeLogic {
  void Function(BuildContext context, EpisodeState currentState) get listener =>
      (context, state) {
        if (state is EpisodeEpisodeEndState) {
          state.data.initalViewArguments?.onChapterEnd
              .call(context, state.data.initalViewArguments?.nextEpisode ?? 0);
        }
      };

  final EpisodeEvents events = const EpisodeEvents();
}

final class EpisodeEvents {
  const EpisodeEvents();
  void onInitialEvent(
    ArrugasChapterRouter? viewArguments,
    BuildContext context,
  ) {
    if (viewArguments != null) {
      BlocProvider.of<EpisodeBloc>(context).add(
        EpisodeInitialEvent(
          viewArguments: viewArguments,
          context: context,
        ),
      );
    }
  }

  void onNextEpisode(
    BuildContext context,
  ) {
    BlocProvider.of<EpisodeBloc>(context).add(
      EpisodeNextPageEvent.next(
        context,
      ),
    );
  }

  void onPreviousEpisode(
    BuildContext context,
  ) {
    BlocProvider.of<EpisodeBloc>(context).add(
      EpisodeNextPageEvent.previous(
        context,
      ),
    );
  }
}
