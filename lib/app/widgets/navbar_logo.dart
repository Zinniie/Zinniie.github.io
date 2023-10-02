import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:zees_portfolio/core/theme/app_theme.dart';

import '../../core/res/responsive.dart';
import 'custom_outline.dart';

class NavBarLogo extends StatefulWidget {
  const NavBarLogo({Key? key}) : super(key: key);

  @override
  State<NavBarLogo> createState() => _NavBarLogoState();
}

class _NavBarLogoState extends State<NavBarLogo> {
  Animation? sizeAnimation;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    // theme
    var theme = Theme.of(context);
    //
    var textSty = TextStyle(
      color: theme.textColor,
      fontWeight: FontWeight.w100,
      fontSize: Responsive.isDesktop(context) ? 32 : 20,
    );

    return Responsive(
      desktop: Image.asset(
        'assets/imgs/logo.png',
      ),
      tablet: Image.asset(
        'assets/imgs/logo.png',
        height: 8.h,
      ),
      mobile: Padding(
        padding: EdgeInsets.only(top: 4.h),
        child: Image.asset(
          'assets/imgs/logo.png',
          height: 5.h,
        ),
      ),
      // Padding(
      //   padding: EdgeInsets.only(top: 3.h),
      //   child: Row(
      //     mainAxisSize: MainAxisSize.min,
      //     children: [
      //       // Text("< ", style: textSty),
      //       Image.asset(
      //         'assets/imgs/logo.png',
      //         height: 8.h,
      //       )
      //       //   Responsive.isDesktop(context) ? " />\t\t" : " />",
      //       //   style: textSty,
      //       // )
      //     ],
      //   ),
    );
  }
}
