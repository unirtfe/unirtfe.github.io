import 'dart:ui';

import 'card.dart';
import 'pile.dart';
import '../painters/suit.dart';
import '../utils/constants.dart';
import 'package:flame/components.dart';

class Foundation extends PositionComponent implements Pile {
  Foundation(int intSuit, {super.position})
      : suit = Suit.fromInt(intSuit),
        super(size: GameConstant.cardSize);

  final Suit suit;

  final List<Card> _cards = [];

  //#region Pile API

  @override
  bool canMoveCard(Card card) {
    return _cards.isNotEmpty && card == _cards.last;
  }

  @override
  bool canAcceptCard(Card card) {
    final topCardRank = _cards.isEmpty ? 0 : _cards.last.rank.value;

    return card.suit == suit &&
        card.rank.value == topCardRank + 1 &&
        card.attachedCards.isEmpty;
  }

  @override
  void removeCard(Card card) {
    assert(canMoveCard(card));

    _cards.removeLast();
  }

  @override
  void returnCard(Card card) {
    card.position = position;

    card.priority = _cards.indexOf(card);
  }

  @override
  void acquireCard(Card card) {
    assert(card.isFaceUp);

    card.position = position;

    card.priority = _cards.length;

    card.pile = this;

    _cards.add(card);
  }

  //#endregion

  //#region Rendering

  final _borderPaint = Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 10
    ..color = const Color(0x50ffffff);

  late final _suitPaint = Paint()
    ..color = suit.isRed ? const Color(0x3a000000) : const Color(0x64000000)
    ..blendMode = BlendMode.luminosity;

  @override
  void render(Canvas canvas) {
    canvas.drawRRect(GameConstant.cardRRect, _borderPaint);

    suit.sprite.render(
      canvas,
      position: size / 2,
      anchor: Anchor.center,
      size: Vector2.all(GameConstant.cardWidth * 0.6),
      overridePaint: _suitPaint,
    );
  }

  //#endregion
}
