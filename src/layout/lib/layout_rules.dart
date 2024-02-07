import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

import 'screen_size_support.dart';

mixin LayoutRules {
  ScreenSizeSupport obtainLayoutJumps({required MediaQueryData mediaQuery}) {
    if (kIsWeb) {
      return ScreenSizeSupport.obtainSizeByBreakPoint(
        side: mediaQuery.size.shortestSide,
      );
    }

    return ScreenSizeSupport.obtainSizeByBreakPoint(
      side: mediaQuery.orientation == Orientation.landscape
          ? mediaQuery.size.height
          : mediaQuery.size.width,
    );
  }
}
