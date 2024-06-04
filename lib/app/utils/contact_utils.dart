import '../../changes/links.dart';

class ContactUtils {
  final String url;
  final String icon;
  final String? text;

  ContactUtils({
    required this.url,
    required this.icon,
    this.text,
  });
}

List<ContactUtils> contactUtils = [
  ContactUtils(
    url: gitHub,
    icon: "assets/icons/github.svg",
    text: 'https://github.com/Zinniie',
  ),

  // ContactUtils(
  //     url: fiverr,
  //     icon: "https://img.icons8.com/ios-filled/50/000000/fiverr.png"),
  // ContactUtils(
  //     url: facebook,
  //     icon: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png"),
  // ContactUtils(
  //     url: youtube,
  //     icon: "https://img.icons8.com/ios-filled/50/000000/youtube-play.png"),
  ContactUtils(
    url: whatsapp,
    icon: "assets/icons/whatsapp.svg",
    text: '+2348139067263',
  ),
  ContactUtils(
    url: twitter,
    icon: "assets/icons/twitterx.svg",
    text: 'https://twitter.com/ziiniee',
  ),
  ContactUtils(
      url: linkedin,
      icon: "assets/icons/linkedin.svg",
      text: 'https://linkedin.com/in/ezinnennabugwu'),

  ContactUtils(
      url: email,
      icon: "assets/icons/email.svg",
      text: 'ezinne.blessing@yahoo.com'),
  // ContactUtils(
  //     url: upwork,
  //     icon: "https://img.icons8.com/ios-filled/50/000000/upwork.png"),
  // ContactUtils(
  //     url: instagram,
  //     icon: "https://img.icons8.com/glyph-neue/64/000000/instagram-new.png"),
];

// 