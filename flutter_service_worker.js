'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3e5af176a9139441d96de8c355b20b4d",
".git/config": "05324d5df8f747f3507f99663196d8c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ea35e39e65273317e916ac23f7893bd0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cde8bb11a66cac778c97e1232d2b0a0c",
".git/logs/refs/heads/main": "c07c32a53809f9b7611541d9293bec8e",
".git/logs/refs/remotes/origin/main": "d9135b19a27db30734e4e5f43048f079",
".git/objects/03/c2f693ef42574fa41b522bdd3b1179c55d8e1e": "12d0132986a425ecd02135abd1edd717",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/26e1fbfe74a182dab8bf39da850086eabb1e7a": "667fb9988a9f27e6f9baacd36c5464b0",
".git/objects/06/aea97f353864586ce01e97ce4417dbeb89668d": "60c0f4b143fa97510a381c9798660041",
".git/objects/08/035b5101ee4fc074d3901927abcf5ad0833d8f": "272617b35098aa6fc74f8a2896de529e",
".git/objects/08/4d3793f3e2ea68c6a8db3e22fb80a4859dda8f": "be28553bf8a96acecbef63a825e467b6",
".git/objects/0e/8d45813df31f32de73c6ba9579e16274c23057": "37af4ca4cfd86e8a429e3b5e556636fe",
".git/objects/12/24a7e672e249335f0a417e32e12baa60ca30e7": "6aa10f7d0f36df53f82e57f05c0d718e",
".git/objects/14/2bb800bdf1e89d2ea2dc0991c32863052434c9": "a06620235bb17da06938953a14e91a99",
".git/objects/17/309daf173305db782328caf72f1fe4fd1ba401": "f217a84a2594ab1035d341944d0b172e",
".git/objects/19/11e52e1c968beee06633bf286df6bb03dc3435": "d605ffa22915cd074962b2e5fef1970a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/b28cbdd89d869aea36eefd527c1fc704eabb1b": "dd85d72fa66d38a914caa628906f3582",
".git/objects/26/04ceb71ec21385a920aa3bf83e6516e078b4de": "5e08d5253afcf3005f814cb3674a31f0",
".git/objects/26/d3892f978e4a402acd75fd3d79451d680ae36f": "082910f2142bf93783b9ef6ce97f78d3",
".git/objects/2a/154b46fe4de6cd7c1142eb2f4a3a34e015fd2b": "16d0d795dab5bde99736c53f9c46682e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/a52379f56f91f7071ebccc9065934489304efc": "9a1df0c9ba2dcc8b6065e172d8b29515",
".git/objects/2d/c200ef5bdc759636e4f609e78aede3d413c4a4": "23f636df226c39b7d991e195324f5f73",
".git/objects/2f/f5f6a22e79ce23b558a3082355520a94f7c03e": "74d9790051e8b17b94eaedbe1c12d9cf",
".git/objects/30/ff8e4c1df90708424c3392836b0835e1099ed3": "bec8493f8496a2897a49ed6397be947f",
".git/objects/32/2138811d7b5658a87b029d121830db97a3c0e1": "511594b8bbbcb14132ce10cd3dae179d",
".git/objects/32/4d13ade97481ed34c169f9ed3df69c987300d7": "8f88b63866c7dd7c54187546448bcc4c",
".git/objects/36/f15e0ff0bfd50e55bf6849c95b7ce5daa83781": "acbd03a962a949d8edf6e66db18a5c00",
".git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "b3f96d6f5087507124d48ce40448d438",
".git/objects/38/8700f234512e200cec4de16bf6baf20426d3c8": "ab2430c83f05c255ff3ec333cc0677c2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/e7d9d0c8f85ba46bd6c494ac3e0ecb5ae60659": "7f4535d9b917f7c2e68c52be3c029e34",
".git/objects/45/3bd41482bce585abdcc02175f3530dc40cf80c": "f5e80a809b9c83aa6b760209c17d101b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/79a8ff834d35aec20107329a0168fa727cf205": "dd67aa11bbc39e04f08978ceba72458f",
".git/objects/51/5d0feabba049b53c3c7822b32b3482b643bb85": "8ca3e637621671f7f56819a7bd5a0015",
".git/objects/54/9214ed5def2f715b2aa5a02623ae3958f4ec6f": "af62afff9f5a49606d673e56c1c7ac50",
".git/objects/56/47cae3dcb33c69cabfdae1bfa921110ed0f76b": "bb12b5f9590064a6bdea7b8d2c366cc5",
".git/objects/57/099bd7d5bd54005bab1bc202443878f220ebad": "87acf43b193636cd2f52c3c93dacbf9b",
".git/objects/67/b8dccf7f150d8f49c6c7b024811c533e00d6b9": "aac4af70ff28555906666c40cf6cce4d",
".git/objects/6a/951a06a4d8766f8012995bd8c1bed3715d3b10": "f262a4d8a29dbaa6fa8cb403bb69bfc2",
".git/objects/6e/3db8344685fdca0384f77d828ce2b0b612af97": "ddced7ee8683dcb68ebb12ecb95390bd",
".git/objects/6f/d845730e01637ead797a5ad11e0e2a9dc02eac": "3f7ef92b24af5561e51f8bb89715fd0c",
".git/objects/70/6bef122c88382f2d1c1eb7a0603b84d5c644e2": "38d0937f1e63974defe4beec5ae65750",
".git/objects/71/69f60145898f4c3342c010240317009d518646": "981964c04bab91b21d5641dae44a26e0",
".git/objects/72/b0fc6d96409e969aa86d90628148edd26c05f7": "7339e010aee110bacb7bcd6792181e4f",
".git/objects/75/2d0fab788b03c162f7aec80b8e39fa7711b900": "0c6a77a235ed94762fb3c594b831b5f9",
".git/objects/79/977bb399ede6de4703a26c9d35a982d09bf398": "b235815ffa0347cd775958cd4cb4ece5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bf8d77074039f25f4082668045360aa2bf4a4b": "efa36ef5046cabd9678a3e0f3b481140",
".git/objects/7a/5415908372c33e2fb22f3c06d4a0b586ff233e": "780065fadc9450313c4e31c7240fe534",
".git/objects/7b/700282a93cffefb14e4a2481f011d98fece19a": "54d974ae5290cbd53203d30eee68261e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/80/dc8b59335e0e1c6e6c19dc7c1278fdfcf74840": "63d59add4d59f32398844d0be54561ae",
".git/objects/82/a7056bc13860d44b4565f9a3173a3dc4c9d971": "379b298908882d9acdd80d800d63854d",
".git/objects/86/b564d4e91bd246bc422ce6f08c7fc1350c8957": "2d67f7ac8ac0a66349446b0c6b95134d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ff26c1e4c2db1fddb6bb4214cb9210ecc73b49": "8dfe80040860415d6325c9f8fb579d70",
".git/objects/8f/f5fe09d978110def271e6e2a1fceb33f7b494c": "caa2f7d833ca458cc639f217e929a954",
".git/objects/90/28f4ecf1596a5e6e553d834abfb8d3567a30be": "46d3a68e618a5bdaaac19909ae5bd902",
".git/objects/95/156d539642ebb9276eec539736b03d2f58f57d": "1ea3b1a8a27fed128b01581f68291704",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/fa767091b5c718951fa621efd515ef6e926e39": "d09daff3ff3eb957a6b8363aaabff498",
".git/objects/99/299640bed0538a2ec35d6e3d07d7b391603b47": "700903b7e526121a9e3e15e117b19127",
".git/objects/9b/29746fb2c7bfd59a07aabf820266adb023e1b3": "834f92ea042f15eb2cb76de3135ccdd9",
".git/objects/9d/36f59f4929c30944c160318d0252b9109200d7": "5ca4a8e813d9af755f6232c87ba8da44",
".git/objects/a0/9096d5ae370499ce0574c2ae1651ebe4db4231": "9f4cc80062107d62974335fd7306bc7a",
".git/objects/a0/ff5c2a7f4fba0cc12cbb4b1e5738929d1c1144": "f82495bc492efe44a5b856d35034ea12",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/a2d86d31723a67c0813c8439193aca5486daec": "25509c142966ea7ea36289531224b1e8",
".git/objects/a5/3f0f552317fcff1368d0235ec76b77275ecab5": "c20a1b0e8e30ae1100aaf2408136be51",
".git/objects/a6/038903616d99517db74ae90ac07b403407fc88": "37ae916f4b9fc338c68a301bec97b965",
".git/objects/aa/36e2c0d2b6222fdf2f12d60d67266537ddcf54": "3cfa3f13a0f31874976025609d9cc89d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/d0c8b900a53d64bc5bd72669ddfe62cc2383d1": "132bc8f65cffae65e98e08f02cdcc6e9",
".git/objects/ac/da3b80f0faf90814ae327ae0c6a24184060865": "88766af2fb660717d829b93d9dba3881",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b3/3bd28e474a4adc6666c94333333a22ec0bad8e": "298321af20d2d012621b0e736548a108",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/bb/ff2f552406e39568856cc390b42287ce284809": "2bab9ea47ea99c5b31be90e27e7ce744",
".git/objects/bd/6651cb07e27214a9e666682c41f31d32767ebd": "e142fbb1a718fd47074fb18ac95fc3a6",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/91a30afb21d48c6b8d47ad33f6be3379cb2f7b": "e8d83e04b6b91c9477473bfd1c5848c4",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/2b5b39cbdb99b98dc153c782d0fad4787d056e": "c10040fffbb5cdd2665f3927f5e9e4c5",
".git/objects/d5/5fdbac7dbe5b19087680f291bd56f08303883f": "34c6a4f6fa5b4c4bdabbffdd7702684e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/371a1bd81110dc267ab390a2a4b4ab43a3ae3b": "e4a53333c6a699d99d89e485ef21df74",
".git/objects/dd/493c3a9eb70b05397b269a61961d59a9d3b7d8": "832efb06948a5c2a42b82039ba9a0825",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/673aa2864d3bcaf28e4becf125eecd69a437cc": "4463cca40d44adebacc7e3bd5e27b367",
".git/objects/e3/4cbe9eb9c296b5f870c7e5675531fd457b1cc9": "c5d87e06558c5416b5313a6d057d2d1e",
".git/objects/e4/b85ca165bbe7cc9abe8a84b6c46b8998ba77f6": "1bb4d34d3fdf982e66b0f2ff06f28981",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/088ea394c119679be303cfd496ed354708e82f": "c21d41d1db63225799321cbac331b3d6",
".git/objects/e6/ff7674992b2b550423ca82e467b350a76c2f89": "94eb2e7d8ee1c8af63f000d460a4a035",
".git/objects/e7/79219cdc4774a707adee2b7c3243b004f41116": "3d13681be7504cee7428bf20d61eb57b",
".git/objects/e7/88efeafcc5c2d23922f75699a1b066ad79214a": "3a6487f1ddbe8afa65963b6077147926",
".git/objects/e8/d83697aa798c9e08ba55a3fe3861343732ce57": "512fbcad6ebfc72f9355a74009b35a36",
".git/objects/e9/1493137d32c57c5cc2cf3700d6d3c239ed455d": "c59aa1c64db006ee49d62563a00c3a3b",
".git/objects/e9/db9881657a7209d571fb950e0542539faba0e6": "14bced0bd2c2eaa4ec79a67de5b0773d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f965a9e6a3194f2e5307553d0e2ca00a430b6c": "759148183d5a49b82984781082807f2f",
".git/objects/f0/3a2b9e4ca57d36aa256f2ef48b47e5f72c0e47": "77c27839fd09ec3dfb266d8335a5ed0b",
".git/objects/f2/27fbf631004b1483af3a043f982a8e69f57d85": "937ad4e9516e874b118bedfd237308c8",
".git/objects/f3/26288935bfd8f0226dacb61f26cae78c5fbe30": "845b428c0a31b53ea655e85e29f9d04f",
".git/objects/f4/48d64416240fb332514a33974f23d79b8786e3": "4202d5a25b0a23d3814b6e929a6744d8",
".git/objects/f7/2dd4214a5bb02526d3a26eca4dfff421945c0e": "bc6a39d3a044a08aad92898b826b5c70",
".git/objects/f8/aa8cf6034e4048a5e6152e8d1c29bdfba1af37": "b09683a21edd8341d3492110617342e5",
".git/refs/heads/main": "f6dbd52b0fcd2158f235cbceadf99f92",
".git/refs/remotes/origin/main": "f6dbd52b0fcd2158f235cbceadf99f92",
"assets/AssetManifest.json": "641eb1716dab9a72def07f5bec95ba86",
"assets/assets/fonts/Alkalami-Regular.ttf": "447cd03a9484dd3909ce99b5af83206e",
"assets/assets/fonts/RobotoMono-Bold.ttf": "0339b745f10bb01da181af1cdc33c361",
"assets/assets/fonts/RobotoMono-BoldItalic.ttf": "a4cab46969174b31ea19a358243688c5",
"assets/assets/fonts/RobotoMono-ExtraLight.ttf": "b8b8a584a0b8307e1aa11f9f037a0502",
"assets/assets/fonts/RobotoMono-ExtraLightItalic.ttf": "4d323d0f9dcfc8f2cec7dd181ddc6ada",
"assets/assets/fonts/RobotoMono-Italic.ttf": "9eb6854ad766566c29d1bb5711504345",
"assets/assets/fonts/RobotoMono-Light.ttf": "14fa2a726b29e8805e287c002ab64397",
"assets/assets/fonts/RobotoMono-LightItalic.ttf": "ee67c6f89219bab25719962baf52abdd",
"assets/assets/fonts/RobotoMono-Medium.ttf": "b090e3202375adb631519fab6bf121c2",
"assets/assets/fonts/RobotoMono-MediumItalic.ttf": "84aa53c3bad6d41469bc47846baa6183",
"assets/assets/fonts/RobotoMono-Regular.ttf": "7e173cf37bb8221ac504ceab2acfb195",
"assets/assets/fonts/RobotoMono-SemiBold.ttf": "e9372f334303337690d46c5a169f3b10",
"assets/assets/fonts/RobotoMono-SemiBoldItalic.ttf": "62e6605f714a9c782695bed8eb0882f3",
"assets/assets/fonts/RobotoMono-Thin.ttf": "d1a7b45f28bf337cab8adf3992f669a0",
"assets/assets/fonts/RobotoMono-ThinItalic.ttf": "adc49ca2fcfd159898decbcee230c865",
"assets/assets/images/icons8-github.svg": "357cb9d8c47ddd6fb308e55f6f72d187",
"assets/assets/images/icons8-linkedin%2520(1).svg": "52f5ee20e801a332e19e0117bd94d0dc",
"assets/assets/images/icons8-linkedin%2520(2).svg": "1dde5adddb7219422ba68faf49472ce4",
"assets/assets/images/icons8-linkedin.svg": "84330b1e143d7dc839717aae40928dca",
"assets/FontManifest.json": "30da986b645080785a122cfb9d67eac5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "fc4a72a3331c418aba23f2bad3b2ec12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e8f26b59b1e24c2f66705a6845a0b75",
"/": "3e8f26b59b1e24c2f66705a6845a0b75",
"main.dart.js": "9d9bf35f7875515e3daac6c95558d065",
"manifest.json": "c1c9920f1db814400f634345daca2165",
"README.md": "a86b24e25e1601efd03a02538d419dae",
"version.json": "c74f5732fe417fecfae068bf311abf1e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
