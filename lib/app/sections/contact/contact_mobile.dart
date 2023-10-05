import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';

import '../../../changes/links.dart';
import '../../../changes/strings.dart';
import '../../../core/color/colors.dart';
import '../../../core/configs/configs.dart';
import '../../../core/util/constants.dart';
import '../../utils/contact_utils.dart';
import '../../widgets/custom_text_heading.dart';

class ContactMobileTab extends StatelessWidget {
  const ContactMobileTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    Size size = MediaQuery.of(context).size;
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 4.w),
      child: Column(
        children: [
          const CustomSectionHeading(text: "\nGet in Touch"),
          Space.y(1.w)!,
          const CustomSectionSubHeading(
            text:
                "Looking for a dedicated and versatile Flutter Developer? You can contact me via the links below.",
          ),
          Space.y(2.w)!,
          // Space.y(5.w)!,
          // InkWell(
          //   onTap: () => openURL(whatsapp),
          //   child: Container(
          //     padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          //     decoration: BoxDecoration(
          //         gradient: buttonGradi, borderRadius: BorderRadius.circular(10)),
          //     child: const Text(
          //       'Get Started',
          //       style: TextStyle(
          //         fontSize: 18,
          //         fontWeight: FontWeight.w500,
          //         color: blackColor,
          //       ),
          //     ),
          //   ),
          // ),
          Space.y(2.w)!,
          Container(
            padding: EdgeInsets.all(size.width * 0.05).copyWith(bottom: 10),
            decoration: BoxDecoration(
              gradient: theme.contactCard,
              borderRadius: BorderRadius.circular(30),
              boxShadow: [blackColorShadow],
            ),
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Text(
                        //   contactHeadding,
                        //   style: TextStyle(
                        //     height: 1.2,
                        //     fontSize: 8.sp,
                        //     fontWeight: FontWeight.w600,
                        //   ),
                        // ),

                        // Space.y(1.w)!,
                        // Row(
                        //   children: [
                        //     Column(
                        //       children: contactUtils
                        //           .asMap()
                        //           .entries
                        //           .map((e) => IconButton(
                        //                 icon: Image.network(
                        //                   e.value.icon,
                        //                   color: theme.textColor,
                        //                 ),
                        //                 onPressed: () => openURL(e.value.url),
                        //                 highlightColor: Colors.white54,
                        //                 iconSize: 21,
                        //               ))
                        //           .toList(),
                        //     ),
                        //     Column(
                        //         children: contactUtils
                        //             .asMap()
                        //             .entries
                        //             .map(
                        //               (e) => GestureDetector(
                        //                   onTap: () => openURL(e.value.url),
                        //                   child: Text(e.value.text ?? '')),
                        //             )
                        //             .toList())
                        //   ],
                        // ),
                        Container(
                          width: 70.w,
                          child: Text(
                            contactSubHeadding,
                            style: TextStyle(
                              fontSize: 8.sp,
                              fontWeight: FontWeight.w100,
                            ),
                          ),
                        ),
                        Space.y(2.w)!,
                        // SizedBox(height: AppDimensions.space(3)),
                      ],
                    ),
                    //   InkWell(
                    //     onTap: () => openURL(whatsapp),
                    //     child: Container(
                    //       padding: const EdgeInsets.symmetric(
                    //           vertical: 5, horizontal: 20),
                    //       decoration: BoxDecoration(
                    //           gradient: buttonGradi,
                    //           // border: Border.all(
                    //           //     width: 2.0, color: theme.primaryColor),
                    //           borderRadius: BorderRadius.circular(10)),
                    //       child: const Text(
                    //         'Get Started',
                    //         style: TextStyle(
                    //           fontSize: 18,
                    //           fontWeight: FontWeight.w500,
                    //           color: textColor,
                    //         ),
                    //       ),
                    //     ),
                    //   ),
                  ],
                ),
                Container(color: Colors.white.withOpacity(0.2), height: 1),
                Space.y(2.w)!,
                Wrap(
                  alignment: WrapAlignment.center,
                  runSpacing: 50,
                  children: contactUtils
                      .asMap()
                      .entries
                      .map((e) => IconButton(
                            icon: Image.network(
                              e.value.icon,
                              color: theme.textColor,
                            ),
                            onPressed: () => openURL(e.value.url),
                            highlightColor: Colors.white54,
                            iconSize: 21,
                          ))
                      .toList(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
