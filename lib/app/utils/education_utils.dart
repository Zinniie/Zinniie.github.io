class EducationUtils {
  final String name;
  final String icon;
  final List<String> tool;
  final String description;

  EducationUtils(
      {required this.name,
      required this.icon,
      required this.description,
      required this.tool});
}

List<EducationUtils> educationUtils = [
  // ServicesUtils(
  //   name: 'Android App Development',
  //   icon: 'assets/icons/android.svg',
  //   description:
  //       "Are you interested in the great Mobile app? Let's make it a reality.",
  //   tool: ['Flutter', 'React Native', 'Android (Kotlin or Java)'],
  // ),
  EducationUtils(
    name: 'iOS App Development',
    icon: 'assets/icons/apple.svg',
    description:
        "Are you interested in the great Mobile app? Let's make it a reality.",
    tool: ['Flutter', 'React Native'],
  ),
  // ServicesUtils(
  //   name: 'UI/UX Designing',
  //   icon: 'assets/icons/graphic.svg',
  //   description:
  //       "I'm creating elegant designs suited to your needs following core design theory. ",
  //   tool: ['Adobe XD', 'Figma', 'Photoshop'],
  // ),
  EducationUtils(
    name: 'Web Development',
    icon: 'assets/icons/website.svg',
    description:
        "Do you have an idea for your next great website? Let's make it a reality.",
    tool: ['Flutter', 'Html,css,js', 'Android (Kotlin or Java)'],
  ),
];
