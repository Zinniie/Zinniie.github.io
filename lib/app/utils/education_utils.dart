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
  EducationUtils(
    name: 'B.A International Relations',
    icon: 'assets/icons/degree.svg',
    description: "Houdegbe North American University in Benin",
    tool: ['Flutter', 'React Native'],
  ),

  EducationUtils(
    name: 'Masters in International Law and Diplomacy',
    icon: 'assets/icons/degree.svg',
    description: 'University of Lagos',
    tool: ['Flutter', 'Html,css,js', 'Android (Kotlin or Java)'],
  ),
];
