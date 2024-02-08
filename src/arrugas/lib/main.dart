import 'package:flutter/material.dart';

import 'hub/episode/episode_view.dart';

import 'hub/main_screen.dart';

void main() {
  runApp(
    MaterialApp(
      initialRoute: 'Main',
      routes: {
        'Main': (context) => const Material(
              child: MainScreen(),
            ),
        // 'episode': (context) => const Material(
        //       child: GenericEpisode(),
        //     ),

        'episode': (context) => const Material(
              child: EpisodeView(),
            ),
      },
    ),
  );
}
