library resume_view_bloc;

import 'package:arrugas_domain/routes/arrugas_chapter_router.dart';

import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../common/arrugas_sounds.dart';
import '../../visual_components/image_platform_management.dart';
import '../episode_view_data.dart';

part 'episode_event.dart';
part 'episode_state.dart';

class EpisodeBloc extends Bloc<EpisodeEvent, EpisodeState> {
  EpisodeBloc() : super(const EpisodeLoadingState()) {
    on<EpisodeInitialEvent>((event, emit) async {
      final viewArguments = event.viewArguments;
      final maxiumSlides = viewArguments.maximumImageAvailables;
      final context = event.context;
      final List<Future> imagesPreload = [];

      final path = event.viewArguments.imagePath;

      try {
        for (int counter = 1; counter < maxiumSlides; counter++) {
          final String imagePath =
              ArrugasImage(path).nextImage(counter: counter).path;
          final ImageProvider image = Image.asset(imagePath).image;
          imagesPreload.add(precacheImage(image, context));
        }

        await Future.wait(imagesPreload);
      } catch (e) {
        emit(const EpisodeFullErrorState());
      }

      emit(
        EpisodeLoadedState(
          stateData: EpisodeViewData(
            backgroundMusic: viewArguments.backgroundMusic,
            currentImage: ArrugasImage(path),
            currentSlide: 1,
            initalViewArguments: viewArguments,
          ),
        ),
      );
    });

    on<EpisodeNextPageEvent>(
      (event, emit) async {
        final viewArguments = state.data.initalViewArguments;
        final context = event.context;
        if (viewArguments == null || !context.mounted) {
          return;
        }

        await _checkStepsAndMusicChanges(context, emit);
        final nextSlide = event.addition;

        final currentSlide = state.data.currentSlide + nextSlide;
        final maximumSlide = viewArguments.maximumImageAvailables;
        if (currentSlide > maximumSlide || currentSlide <= 0) {
          return emit(
            EpisodeEpisodeEndState(
              stateData: state.data,
            ),
          );
        }

        emit(
          state.copyWith(
            stateData: state.data.copyWith(
              currentSlide: currentSlide,
              currentImage:
                  state.data.currentImage.nextImage(counter: currentSlide),
            ),
          ),
        );
      },
    );
  }

  Future<void> _checkStepsAndMusicChanges(
    BuildContext context,
    Emitter<EpisodeState> emit,
  ) async {
    final viewArguments = state.data.initalViewArguments;

    if (viewArguments == null) {
      return;
    }
    final currentSlide = state.data.currentSlide;
    final step = viewArguments.stepGameTransition[currentSlide];

    await step?.call(context);

    arrugasSounds.nextPage();

    final musicChangeStep = viewArguments.musicChangeSteps[currentSlide];
    if (musicChangeStep != null) {
      final newBackgroundMusic = await musicChangeStep.call();
      if (newBackgroundMusic != null) {
        if (arrugasSounds.isBackGroundPlaying) {
          arrugasSounds.playEpisodeBackground(
            backgroundMusic: newBackgroundMusic,
          );
        }
        emit(
          state.copyWith(
            stateData: state.data.copyWith(
              backgroundMusic: newBackgroundMusic,
            ),
          ),
        );
      }
    }
  }
}
