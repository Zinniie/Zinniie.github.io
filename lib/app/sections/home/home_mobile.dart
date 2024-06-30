import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:sizer/sizer.dart';

import '../../../changes/img.dart';
import '../../../changes/links.dart';
import '../../../changes/strings.dart';

import '../../../core/animations/entrance_fader.dart';
import '../../../core/animations/zoom_animation.dart';
import '../../../core/configs/configs.dart';

import 'package:universal_html/html.dart' as html;

import '../../../core/res/responsive_size.dart';
import '../../widgets/color_chage_btn.dart';
import 'widgets/animation_text.dart';

class HomeMobile extends StatelessWidget {
  const HomeMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Padding(
      padding: EdgeInsets.only(left: 10.w, top: 12.h, right: 10.w),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                hellotag,
                style: AppText.h3!.copyWith(fontSize: isFontSize(context, 16)),
              ),
              // Space.x!,
              Image.asset(StaticImage.hi, height: 10.sp),
            ],
          ),
          // Space.y(1.w)!,
          Text(
            yourname,
            style: TextStyle(
              fontSize: isFontSize(context, 28),
              fontWeight: FontWeight.w600,
            ),
          ),
          Space.y(1.w)!,
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              // Text(
              //   "A ",
              //   style: TextStyle(
              //     fontSize: isFontSize(context, 18),
              //     fontWeight: FontWeight.w400,
              //   ),
              // ),
              AnimatedTextKit(
                animatedTexts: mobileList,
                repeatForever: true,
                isRepeatingAnimation: true,
              ),
            ],
          ),
          Space.y(3.5.w)!,
          Padding(
            padding: EdgeInsets.only(right: 10.w),
            child: Text(miniDescription,
                style: TextStyle(
                  fontSize: isFontSize(context, 14),
                  fontWeight: FontWeight.w400,
                  color: theme.textColor.withOpacity(0.6),
                )),
          ),
          Space.y(2.w)!,
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              ColorChageButton(
                text: 'download cv',
                onTap: () {
                  html.window.open(resume, "pdf");
                },
              ),
              //  SizedBox(
              //   width: 6.w,
              // ),
              // QrImageView(
              //   data:
              //       'https://drive.google.com/file/d/1-eXMgBfkmKen71hW7qPMWI_NtU5ldgeQ/view?usp=drivesdk',
              //   version: QrVersions.auto,
              //   size: 100,
              //   backgroundColor: Colors.white,
              //   // gapless: false,
              // )
              const EntranceFader(
                offset: Offset(0, 0),
                delay: Duration(seconds: 1),
                duration: Duration(milliseconds: 800),
                child: ZoomAnimations(),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
