'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8772a2faa1e9ebd900baf3c6945b3093",
"index.html": "2c81a826a0c18c002bd66e776bce84db",
"/": "2c81a826a0c18c002bd66e776bce84db",
"main.dart.js": "05d881f0e05bb03e5ad6cd396e6f0065",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "570eda347708ea6e486dd558cd5164e6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3d69f2e7ef4b3fb452471f04ed1905f4",
".git/config": "6f8cb41ba3df9c98479dd7ac2bb493d7",
".git/objects/0d/7d1662597510143792c154c1c57dd77a395e09": "a739183aab2d9e6c0b561363509bafc0",
".git/objects/50/551ac0dc6b6b16c1e7999a9ee6d78e93650785": "2afb9d019cfdc59bbdd99fb7167efabb",
".git/objects/68/e22a5e044b59379ce47b2f95281bf122f350a3": "dd7f701b3d6433b7012dd2f12404c09a",
".git/objects/57/0a335ef043da4f6dc31dc96f7258f029d5dc42": "fc2bb4f98bae0ec84b70cb9469f8ce50",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/03/eea672f0eb3c50d2178611bbbbbf9c2c826019": "091c697058a90420305a1974f34330fa",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/ca1822e7edba8d892da7a7787d448a5c18c2a1": "82be6dff926d6f89964a8dd79e23a994",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/889a48e96161f6a3d0e18223fd0a2fe2adf64d": "5dec934a9663e730d17da26b01b668e3",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/67/18d94b119b75fca8c9b5d2e89d34d15a4e79fc": "198550f758a0e70434d7f5369777371c",
".git/objects/93/2ee41d5a5fa83005fade63f4f93b44300cf415": "aea5358821f1a1b48a243fe30e3a8446",
".git/objects/0e/e18a9c250e074643dc4e25aae07b3fb49ce3fd": "e1a2ba96fb6ab9293066bbcc9ebf0000",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/02/aa511ee071458162236f08b5b2cf59dbf0085d": "8ee52cc2236cbe9d584b427687e3ec66",
".git/objects/b2/0a9bf63d7edeeee575ef6692297320521daa83": "641cb13d13ae5303c9f8245d3931cc70",
".git/objects/ac/5fb2885189f1dd8eca7dbd628c734612f5a664": "0f162a6b32663f0847f3dc74a9e973c3",
".git/objects/bb/f613273657287aaa7373ab58ba449bca6598e5": "b47ca3c345defd8dd6742bc7697eb95a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/337c739d007a1c862f787567bed956b8c686b0": "bd758a22ad00e6def2e562d80558e895",
".git/objects/d7/c5b751681e2c4900e648a1ea8ab071e9e80668": "ca065c57c2b07fadb58506a8501f18db",
".git/objects/d0/f91308b5af27b4adddf8e88b84495187f126e6": "0950a5515e25928e3436ea240d9ba19b",
".git/objects/be/df4f1edc50fbe2663d1e520e1f68b243ee3bcb": "73d9d4433de8a0cca09fe4086cca56f6",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/a2/327ae0126d7eb959f2d3c4abf09f7f5bbe5f72": "3879c2d740fc09be6c4d2df7c02ee9ac",
".git/objects/a2/053432a6a59ee0d46c54ac17fc2c0f2a2dbbba": "65d8910103acef46f3de990555a6c70f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/73a4b6e5b8443d84b9904640f343f7c5c49d73": "994da321fef0b33cf9b0bc1d65f54398",
".git/objects/e2/8e871d07f9576a1e4877c7d63529184228b1d1": "46bcce1f812feaf826ef91fc24127ef8",
".git/objects/f4/48d49712c722c4f3cb9aeb7f62dfdec29d9299": "ae4b097ac5c1f3c89035f0060855961a",
".git/objects/eb/4ed74e240565731f1e02dd27506fe1ece0662e": "d8afd3e09d6273eb230482ba9d717721",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/ca866ac67033768114434dadc38be97c99b4d9": "c0536e6f758083d58e0cc09c7305c47e",
".git/objects/fc/fa7b0ceca0b1d470868b509931b135cfe42c0a": "ccb8f34a0620fa14b0ea21f3791aeb9a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/ed848465c00c41bc12f3aa5c61bf0dbfda2a66": "3343ef3ecddd2894e9ffb97829988980",
".git/objects/c8/87f51d92da896f379a3f7b3c162b00a09b9fb2": "2f3393e914374d2f9b23f519c2681dc7",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/2356c74b402cca59fa1d3b80078eaca8880775": "afb5fa59a6550827bf714882dc2c0033",
".git/objects/27/83c51064096517baf2d582b710b998b3ead370": "e25c4838f57498d43c371c600817e694",
".git/objects/4b/425ded822025584d4f26d018d24b215ed47848": "2dfc4fb68659c9f882c27ebca16764b4",
".git/objects/42/c3074b3562ffade39fb4cbdf74847609e3aeb9": "e2039c0a793cf32984e7fc340744802d",
".git/objects/89/b01ef1b8a5dc7f4bc405d8b0dac1a44f0f35bb": "c8beffe48202e299e4689495c6e3e3b7",
".git/objects/45/e4545a11187af0bdced9440ceedc074d2c080e": "37cec5dd22a48dcda4ccfd8d193b174e",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/28/b12b9cc127fbeb2dff2c8e282bbf6803812b9b": "7f75125b627ef81f9e839b192553e2e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/86/3e7161f51c216dffd50f29d77c34ede1ddab2a": "352d35723ea0e25067c6087422b8fd18",
".git/objects/2a/fcc45c8357561527104b7c9c77e09e20e91001": "483e2a4dce3bda31a811448e19c7f1d1",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/9a/0b1e015747ba89da402b518d2a905f94b62caf": "b12fe3354dda85a35cbb576eedabf52b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/ba8f30649e9fa829539ab3887674ae65332b1f": "aebe6fbf017cc26d0cf4f8fc4d6cef4a",
".git/objects/3f/12989ee167f6c33d70623395fe39cfecb2985a": "270734af26fac9c3a2fff53ea1209e3b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/6c/88d628f4547612612e1d3e8f3cda021fc8eb84": "9f16e1885cd0c91d0ed2339dde2ad445",
".git/objects/97/2271e7659e8f78a60fd9442522f82542d4b2c3": "452e9cddee800da56c2ee944b72fbdc2",
".git/objects/64/df31a1a37e063be6cdd11c510f6b068ca1903f": "f8cf925e4231efaf9f3103a2525bdf4a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/3ecd8dd7ddff2b2dfa27e861abb19a75fa2913": "37031089ce52442a24af822f7c0ceaf9",
".git/objects/a7/dd44d56f59510fe6b555d24a58e3c94cd6f37a": "e65dec46da374671512a281d7a3bb062",
".git/objects/b6/0781f73025e2c9f6be6b30f2792cef613d68b8": "c5e4519f8fa5abebb56ba9750bb3937c",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/b6/5f8527ee13186b3e0d216988c5ba75cbd2b88c": "9adf7c85e409e9c7948e56fc0856fb75",
".git/objects/d5/a09777ecc037129495c55c718e1bd7f175877d": "e3a748f8acd1ca24619cf8a879eda356",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ef/e4f71d349ae96fb7f295cf7299b49444b730ed": "1a6dcd2af5152edd5e51452b2e1aa1b6",
".git/objects/c4/442ef38dc755f64df8d49eb261255f558fd7e1": "a476ccc8c0dfda41b4a799293e498cdd",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/d069e849245a5a3ad685da68e8a28735898964": "6f3c3efb7ebb699f0339c11709d1ac99",
".git/objects/e8/6069ccd3d388abcfa433f149b95809bc2d88df": "ea4f1582e517043b7e504ecae08eacfc",
".git/objects/c2/d825ad139cb9fa8b38a6eaba0fa60f4bfa983b": "b55606545bda426bdf0a999e171e90e3",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/e0/24f2601a8fe7e5173b7ae90f6241ef1c052952": "03c69ac6efd9159e4882f39ea65bf37e",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/41/866dda7237faff7bf29c585a5e7aedba579acf": "9a609126742adc2edb3ec1d79a643650",
".git/objects/41/97532eba6151783075c9c25cc1453e7beaf9cf": "39e63c97d7a4813cfa83113c70359311",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/991477ef3dd574378277cbed433ec733e97606": "edaabbce3a4953868f4391033de4eb3b",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/4a/2e0c80262301012fa5a6fde3eec10f291970d5": "a508666e31bc5d9728d20bb80b77c118",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/83afbf1ff6f205b69026510d2b55a40e062184": "a9be221b1caa572c040d7a3f092a92c3",
".git/objects/15/460e151be2b545e4e15f51a46c3e286cc90c1d": "416b1a9c9d425994bff99ae8565b5a4c",
".git/objects/15/a33d1aefe55647eb574001f08267dd138604c3": "0951ca5136d79d2a41dff3c07e1947cc",
".git/objects/71/36953aae658f48f5892aceee8e48248942acc2": "f6512af42ee2498020b29f9176fc67e9",
".git/objects/76/fba77afc0fb8711c313453e6480c35e244129c": "67f9bf869c24c17cce15c14b46861307",
".git/objects/1c/3c2fd8f3016a1b720a1973462e894867d1755d": "5ff311044430075aa3e948c5c0a926ec",
".git/objects/49/b4659e3864091a0bd916cdac9c8c7e881b05eb": "a8e712caf41115bd7aac4def901fd0da",
".git/objects/78/c6a6663616d79b6f20eb2f5eb4d8cae1cc1649": "c295bf2b1487a04228ae4d76315d524f",
".git/objects/14/d6cfdbc74af417db22aa4f91b9aef72b5b0e20": "fb229cabd9ef62274e1d897f1c4d12f1",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c00bc86a3e570f9e5071b0aa22877021",
".git/logs/refs/heads/main": "d913c7e93bd123c2cd8cce0b091409ef",
".git/logs/refs/remotes/origin/main": "8a642200d17a525f9be0c5f85a3d86be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "73432231aa7d9a3e7604c4d33beda479",
".git/refs/remotes/origin/main": "73432231aa7d9a3e7604c4d33beda479",
".git/index": "95c03711cf01bdb422a437e09f674135",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "84aae902c4f859b8b790144a63bc6b3b",
"assets/AssetManifest.json": "e8f65ea2016741ecccccd619d0421c8c",
"assets/NOTICES": "6c76e1d7f40162d58ddb6b45626ea931",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4f9d647b310cbd6283d6ec425ba1ca04",
"assets/fonts/MaterialIcons-Regular.otf": "71747455115d0ad6ca16ebdc72351aa5",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/zee.jpeg": "9927114bf812cd2d03851a71ba6fe0b6",
"assets/assets/imgs/remis.PNG": "64e0b120145e5811cd33f8eab43c1e06",
"assets/assets/imgs/charge.png": "466b0716a834bfd11b8d28c4c4a2dfb9",
"assets/assets/imgs/mms.png": "c04ec72e98fa88fb692c193783214fb1",
"assets/assets/imgs/Rectangle%25202054.png": "368b0b3e4954e034b28540f067d4d0db",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/admin_panel.png": "d22db73385132e05a40224750c14f820",
"assets/assets/imgs/IMG_0107.png": "33971748e753b8b6fb9301b9118f7e95",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/674AA143-C9ED-48A4-B43D-495F4C8F6EDB.PNG": "f23911f86017a171d268a03d1891c305",
"assets/assets/imgs/fuelprice.PNG": "de2bf0a03300400413f2525b88cc068e",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/black_logo.png": "9ab17231639f9a2e4578c4b15f6461cc",
"assets/assets/imgs/logo.png": "570eda347708ea6e486dd558cd5164e6",
"assets/assets/imgs/reactjs.png": "f9dbd941affb7366d306c6f1de77f46d",
"assets/assets/imgs/gensys.PNG": "63e994ce298f81e4198d59cc25c15628",
"assets/assets/imgs/B0A992DB-613F-47E2-8C98-570C197CCA67.PNG": "6121ebed46ec7e2206fcd055e4dbd1bd",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/chargx.PNG": "ad756d4c116ae9f487c521a39c16cafb",
"assets/assets/imgs/chargx_mobile.png": "79acd3d090e91f088ca358dc050203ec",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/imgs/mobile_admin.PNG": "72a24439c1e485fd19c661ae1206c01d",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/github.svg": "f29a2e6a3b02b3856e8a53736adf6aad",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/twitterx.svg": "2b235014b9985caf12b71379cc6d2b4f",
"assets/assets/icons/degree.svg": "ddaab9f4c50e93e7d6c500033eb6cc5e",
"assets/assets/icons/email.svg": "98292ec47e1dfe0721a65c47678d0ccb",
"assets/assets/icons/whatsapp.svg": "345c4b94ea5add2f4a597baa25597982",
"assets/assets/icons/linkedin.svg": "d3ac607a9624aa7379d54013135dadd9",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
