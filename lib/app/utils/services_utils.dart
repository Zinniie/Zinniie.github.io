class ServicesUtils {
  final String name;
  final String icon;
  final List<String> tool;
  final String description;

  ServicesUtils(
      {required this.name,
      required this.icon,
      required this.description,
      required this.tool});
}

List<ServicesUtils> servicesUtils = [
  ServicesUtils(
    name: 'Mobile App Development',
    icon: 'assets/icons/flutter.svg',
    description: "Skilled in developing cross-platform mobile applications.",
    tool: ['Flutter', 'Dart'],
  ),
  ServicesUtils(
    name: 'Web Development',
    icon: 'assets/icons/website.svg',
    description:
        "Experienced in developing websites with expertise in modern web technologies.",
    tool: [
      'ReactJs',
      'HTML, CSS, JavaScript',
    ],
  ),
];
