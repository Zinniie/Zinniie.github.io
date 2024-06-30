import 'package:flutter/material.dart';

import 'package:sizer/sizer.dart';
import 'package:zees_portfolio/core/theme/app_theme.dart';

import '../../../../core/color/colors.dart';
import '../../../../core/res/responsive.dart';
import '../../../utils/project_utils.dart';

class ProjectCard extends StatefulWidget {
  final ProjectUtils project;

  const ProjectCard({Key? key, required this.project}) : super(key: key);
  @override
  ProjectCardState createState() => ProjectCardState();
}

class ProjectCardState extends State<ProjectCard> {
  bool isHover = false;

  @override
  Widget build(BuildContext context) {
    // double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    var theme = Theme.of(context);
    return InkWell(
      hoverColor: Colors.transparent,
      splashColor: Colors.transparent,
      highlightColor: Colors.transparent,
      // onTap: () => openURL(widget.project.links),
      onTap: () {},
      onHover: (isHovering) {
        if (isHovering) {
          setState(() => isHover = true);
        } else {
          setState(() => isHover = false);
        }
      },
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 1.w),
        width: Responsive.isDesktop(context) ? 30.w : 90.w,
        height: 36.h,
        decoration: BoxDecoration(
          gradient: isHover ? pinkpurple : grayBack,
          borderRadius: BorderRadius.circular(10),
          boxShadow: isHover ? [primaryColorShadow] : [blackColorShadow],
        ),
        child: Stack(
          fit: StackFit.expand,
          children: [
            Padding(
              padding: isHover ? const EdgeInsets.all(20) : EdgeInsets.zero,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    widget.project.icons,
                    height: height * 0.05,
                  ),
                  SizedBox(height: height * 0.02),
                  Text(
                    widget.project.titles,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: isHover ? whiteColor : theme.textColor,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: height * 0.01),
                  Text(
                    widget.project.description,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      // fontSize: 7.sp,
                      color: isHover ? whiteColor : theme.textColor,
                    ),
                  ),
                  SizedBox(height: height * 0.01),
                ],
              ),
            ),
            AnimatedOpacity(
              duration: const Duration(milliseconds: 400),
              opacity: isHover ? 0.1 : 1.0,
              child: Container(
                width: Responsive.isDesktop(context) ? 30.w : 70.w,
                height: 36.h,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  image: DecorationImage(
                      image: AssetImage(widget.project.banners),
                      fit: BoxFit.cover),
                ),
                // child: Image.asset(
                //   widget.project.banners,
                //   fit: BoxFit.cover,
                // ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MobileProjectCard extends StatefulWidget {
  final MobileProjectUtils mobileProject;

  const MobileProjectCard({Key? key, required this.mobileProject})
      : super(key: key);
  @override
  MobileProjectCardState createState() => MobileProjectCardState();
}

class MobileProjectCardState extends State<MobileProjectCard> {
  bool isHover = false;

  @override
  Widget build(BuildContext context) {
    // double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    var theme = Theme.of(context);
    return Column(
      children: [
        AnimatedOpacity(
          duration: const Duration(milliseconds: 400),
          opacity: isHover ? 0.1 : 1.0,
          child: Container(
            width: Responsive.isDesktop(context) ? 30.w : 95.w,
            height: 36.h,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              image: DecorationImage(
                  image: AssetImage(widget.mobileProject.banners),
                  fit: BoxFit.cover),
            ),
            // child: Image.asset(
            //   widget.project.banners,
            //   fit: BoxFit.cover,
            // ),
          ),
        ),
        SizedBox(height: height * 0.02),
        Text(
          widget.mobileProject.titles,
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: isHover ? whiteColor : theme.textColor,
          ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: height * 0.01),
        Text(
          widget.mobileProject.description,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 8.sp,
            color: isHover ? whiteColor : theme.textColor,
          ),
        ),
        SizedBox(height: height * 0.01),
      ],
    );
    // return InkWell(
    //   hoverColor: Colors.transparent,
    //   splashColor: Colors.transparent,
    //   highlightColor: Colors.transparent,
    //   // onTap: () => openURL(widget.mobileProject.links),
    //   onHover: (isHovering) {
    //     if (isHovering) {
    //       setState(() => isHover = true);
    //     } else {
    //       setState(() => isHover = false);
    //     }
    //   },
    //   child: Container(
    //     margin: EdgeInsets.symmetric(horizontal: 1.w),
    //     width: Responsive.isDesktop(context) ? 30.w : 90.w,
    //     height: 36.h,
    //     decoration: BoxDecoration(
    //       gradient: isHover ? pinkpurple : grayBack,
    //       borderRadius: BorderRadius.circular(10),
    //       boxShadow: isHover ? [primaryColorShadow] : [blackColorShadow],
    //     ),
    //     child: Stack(
    //       fit: StackFit.expand,
    //       children: [
    //         Padding(
    //           padding: isHover ? const EdgeInsets.all(20) : EdgeInsets.zero,
    //           child: Column(
    //             mainAxisAlignment: MainAxisAlignment.center,
    //             children: [
    //               Image.asset(
    //                 widget.mobileProject.icons,
    //                 height: height * 0.05,
    //               ),
    //               SizedBox(height: height * 0.02),
    //               Text(
    //                 widget.mobileProject.titles,
    //                 style: TextStyle(
    //                   fontWeight: FontWeight.bold,
    //                   color: isHover ? whiteColor : theme.textColor,
    //                 ),
    //                 textAlign: TextAlign.center,
    //               ),
    //               SizedBox(height: height * 0.01),
    //               Text(
    //                 widget.mobileProject.description,
    //                 textAlign: TextAlign.center,
    //                 style: TextStyle(
    //                   fontSize: 4.sp,
    //                   color: isHover ? whiteColor : theme.textColor,
    //                 ),
    //               ),
    //               SizedBox(height: height * 0.01),
    //             ],
    //           ),
    //         ),
    //         AnimatedOpacity(
    //           duration: const Duration(milliseconds: 400),
    //           opacity: isHover ? 0.1 : 1.0,
    //           child: Container(
    //             width: Responsive.isDesktop(context) ? 30.w : 70.w,
    //             height: 36.h,
    //             decoration: BoxDecoration(
    //               borderRadius: BorderRadius.circular(10),
    //               image: DecorationImage(
    //                   // scale: 2.0,
    //                   image: AssetImage(
    //                     widget.mobileProject.banners,
    //                   ),
    //                   fit: BoxFit.cover),
    //             ),
    //             // child: Image.asset(
    //             //   widget.project.banners,
    //             //   fit: BoxFit.cover,
    //             // ),
    //           ),
    //         ),
    //       ],
    //     ),
    //   ),
    // );
  }
}