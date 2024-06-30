part of 'education.dart';

class EducationDesktop extends StatefulWidget {
  const EducationDesktop({Key? key}) : super(key: key);

  @override
  EducationDesktopState createState() => EducationDesktopState();
}

class EducationDesktopState extends State<EducationDesktop> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;

    return Container(
      padding: EdgeInsets.symmetric(horizontal: width / 8)
          .copyWith(bottom: height * 0.2),
      child: Column(
        children: [
          const CustomSectionHeading(text: '\nEducation'),
          Space.y(2.w)!,
          Wrap(
            spacing: width * 0.03,
            runSpacing: height * 0.05,
            alignment: WrapAlignment.start,
            crossAxisAlignment: WrapCrossAlignment.start,
            children: educationUtils
                .asMap()
                .entries
                .map(
                  (e) => _EducationCard(education: e.value),
                )
                .toList(),
          )
        ],
      ),
    );
  }
}
