import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'bloc/episode_bloc.dart';
import 'episode_content.dart';

class EpisodeView extends StatelessWidget {
  const EpisodeView({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => EpisodeBloc(),
      child: const EpisodeContent(),
    );
  }
}
