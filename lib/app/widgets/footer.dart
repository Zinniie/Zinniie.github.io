import 'package:flutter/material.dart';

import '../../changes/links.dart';
import '../../core/util/constants.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    int currentYear = DateTime.now().year;
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Column(
      children: [
        Container(
          margin: EdgeInsets.fromLTRB(0, height * 0.05, 0, 0),
          height: height * 0.07,
          width: width,
          child: Center(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text("Developed by "),
                InkWell(
                  onTap: () => openURL(gitHub),
                  child: const Text(
                    " Ezinne Blessing Nnabugwu ",
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
                Text(" © $currentYear using Flutter Web"),
              ],
            ),
          ),
        ),
        // Container(
        //   margin: EdgeInsets.fromLTRB(0, height * 0.05, 0, 0),
        //   height: height * 0.07,
        //   width: width,
        //   child: Center(
        //     child: Row(
        //       mainAxisSize: MainAxisSize.min,
        //       children: [
        //         const Text("Developed by "),
        //         InkWell(
        //           onTap: () => openURL(gitHub),
        //           child: const Text(
        //             " Ezinne Nnabugwu ",
        //             style: TextStyle(fontWeight: FontWeight.bold),
        //           ),
        //         ),
        //         const Text(" © 2023 using Flutter Web"),
        //       ],
        //     ),
        //   ),
        // ),
      ],
    );
  }
}
