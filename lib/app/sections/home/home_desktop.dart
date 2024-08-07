import 'package:qr_flutter/qr_flutter.dart';
import 'package:sizer/sizer.dart';
import 'package:universal_html/html.dart' as html;
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../../changes/img.dart';
import '../../../changes/links.dart';
import '../../../changes/strings.dart';
import '../../../core/animations/entrance_fader.dart';
import '../../../core/animations/zoom_animation.dart';
import '../../../core/configs/configs.dart';
import '../../../core/res/responsive_size.dart';
import '../../widgets/color_chage_btn.dart';
import 'widgets/animation_text.dart';

class HomeDesktop extends StatelessWidget {
  const HomeDesktop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);

    return SizedBox(
      height: 90.h,
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 10.w),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              margin: EdgeInsets.only(top: 10.h),
              width: 55.w,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(hellotag,
                          style: const TextStyle(
                            fontSize: 25,
                            fontWeight: FontWeight.w100,
                          )),
                      EntranceFader(
                        offset: const Offset(0, 0),
                        delay: const Duration(seconds: 2),
                        duration: const Duration(milliseconds: 800),
                        child: Image.asset(StaticImage.hi, height: 40),
                      ),
                    ],
                  ),
                  Space.y(0.5.w)!,
                  Text(yourname,
                      style: const TextStyle(
                        fontSize: 50,
                        fontWeight: FontWeight.w600,
                      )),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      // const Text("A ",
                      //     style: TextStyle(
                      //       fontSize: 32,
                      //       fontWeight: FontWeight.w400,
                      //     )),
                      AnimatedTextKit(
                        isRepeatingAnimation: true,
                        repeatForever: true,
                        animatedTexts: desktopList,
                      ),
                    ],
                  ),
                  Space.y(1.5.w)!,
                  Padding(
                    padding: EdgeInsets.only(right: 10.w),
                    child: Text(miniDescription,
                        style: TextStyle(
                          fontSize: isFontSize(context, 20),
                          fontWeight: FontWeight.w400,
                          color: theme.textColor.withOpacity(0.6),
                        )),
                  ),
                  Space.y(3.w)!,
                  Row(
                    children: [
                      ColorChageButton(
                        text: 'download cv',
                        onTap: () {
                          html.window.open(resume, "pdf");
                        },
                      ),
                      SizedBox(
                        width: 6.w,
                      ),
                      QrImageView(
                        data:
                            'https://drive.google.com/file/d/1Iwxa6073LslVZ_xMAACAq8ATFHif168r/view?usp=drive_link',
                        version: QrVersions.auto,
                        size: 100,
                        backgroundColor: Colors.white,
                        // gapless: false,
                      )
                    ],
                  ),
                ],
              ),
            ),
            const ZoomAnimations(),
          ],
        ),
      ),
    );
  }
}
