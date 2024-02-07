import 'dart:ui';

import 'waste.dart';
import '../utils/constants.dart';
import 'package:flame/components.dart';

import 'package:flame/events.dart';

import 'pile.dart';

import 'card.dart';

class Stock extends PositionComponent with TapCallbacks implements Pile {
  Stock({super.position}) : super(size: GameConstant.cardSize);

  /// Which cards are currently placed onto this pile. The first card in the

  /// list is at the bottom, the last card is on top.

  final List<Card> _cards = [];

  //#region Pile API

  @override
  bool canMoveCard(Card card) => false;

  @override
  bool canAcceptCard(Card card) => false;

  @override
  void removeCard(Card card) => throw StateError('cannot remove cards');

  @override
  void returnCard(Card card) => throw StateError('cannot remove cards');

  @override
  void acquireCard(Card card) {
    assert(card.isFaceDown);

    card.pile = this;

    card.position = position;

    card.priority = _cards.length;

    _cards.add(card);
  }

  //#endregion

  @override
  void onTapUp(TapUpEvent event) {
    final wastePile = parent!.firstChild<Waste>()!;

    if (_cards.isEmpty) {
      wastePile.removeAllCards().reversed.forEach((card) {
        card.flip();

        acquireCard(card);
      });
    } else {
      for (var i = 0; i < 3; i++) {
        if (_cards.isNotEmpty) {
          final card = _cards.removeLast();

          card.flip();

          wastePile.acquireCard(card);
        }
      }
    }
  }

  //#region Rendering

  final _borderPaint = Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 10
    ..color = const Color(0xFF3F5B5D);

  final _circlePaint = Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 100
    ..color = const Color(0x883F5B5D);

  @override
  void render(Canvas canvas) {
    canvas.drawRRect(GameConstant.cardRRect, _borderPaint);

    canvas.drawCircle(
      Offset(width / 2, height / 2),
      GameConstant.cardWidth * 0.3,
      _circlePaint,
    );
  }

  //#endregion
}
