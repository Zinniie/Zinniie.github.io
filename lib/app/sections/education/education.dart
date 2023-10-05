import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../core/configs/others/space.dart';

import '../../utils/education_utils.dart';
import '../../widgets/custom_text_heading.dart';
import 'package:sizer/sizer.dart';
import 'package:zees_portfolio/core/theme/app_theme.dart';

import '../../../core/color/colors.dart';

import '../../../core/res/responsive.dart';


part 'education_desktop.dart';
part 'education_mobile.dart';
part 'widgets/_education_card.dart';

class Education extends StatelessWidget {
  const Education({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Responsive(
      mobile: EducationMobile(),
      tablet: EducationMobile(),
      desktop: EducationDesktop(),
    );
  }
}
