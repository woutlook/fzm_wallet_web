'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eba7f75bc62fdf065b707d6dae1f1eac",
"version.json": "916383b9fca9cd3dbb7f138a2b99b047",
"index.html": "d2ae2ba06e518f3076887facdd330949",
"/": "d2ae2ba06e518f3076887facdd330949",
"main.dart.js": "9d51b1004000aaecf7572705c4304877",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c41ff551d66379e94b761ff0ae35fa0",
".git/config": "92205212b97877b001ac85e5ee9fcf3b",
".git/objects/61/7797486dfb5307c7e6b3204d6e76b6f1d580b6": "cca35c4b9108dd5cf0a99045b32eb665",
".git/objects/61/05d4806a57a89fc4cc7e1c664d883b5a508859": "080e178a92a0a35e4117191d2900b450",
".git/objects/57/f5755a42f2225e9c962b067b0d5c9bcbeb1152": "4786c1a9dc177d67f5e12a6d5edefef8",
".git/objects/57/191e496bf40a277f2783f2b08b319617468c78": "b69aa4e6c81268edf47569e123ee6bbc",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/4a159f2d451adf1b6a8d426e5fec98b5cafbc4": "3957d075f883cee6d21c5cf0fc28b66e",
".git/objects/03/80b8a33c5748403832825267f41e8de3bf15c7": "cbba31c9ec98d511ba86672f609c0992",
".git/objects/03/c0a011c35961275fd11ca13cc4edbb4d3cd5f9": "6572a5112332a3b8c7256f6544223a7b",
".git/objects/9e/3636975c274735c2f2fd3bb0b9e757fad56676": "8bc2da4fba18b19b2b92b09e1df59fdb",
".git/objects/6a/25613372c0fa372e5c32c1a12b8cbab66b8557": "90fc479e5343c84cc99cdac2ec40ec98",
".git/objects/35/c1cf8095dece531e4620ce3d1e4c2cc4c1df19": "833c3ddd8c2156403438039cb0b01114",
".git/objects/69/b3957bdd81743a8a61468efe6bbb63f50cad08": "598547727dd67de08cd1fa85a86436d4",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/7b4af2f87968bce20bcf99f6f53f2bac3a5b90": "8316db72e173255f743a9ded284a6c66",
".git/objects/56/9ce1a7d37e70ac9d5abe7da7739b2b51ccb35e": "2669300c19986d082da92b9f81fcc41a",
".git/objects/58/1bbdf0be01a9bdb6fc796ac4d1d044fe1863ca": "93031fc226bd37841912daf4888aec9d",
".git/objects/67/9fdff0e3e26043c30ebe83143a511572f8061f": "fc44bc63d46d1a64f3b490b9a9cd5928",
".git/objects/0b/8bccc69f578fa46d40c569529a44e9e67164fb": "f6e2fabbaf2060130e9c389426b5de35",
".git/objects/34/972a53387d22115d76484087be16a39a5fbc4a": "f80b16f3a690ad389cff61940f26694a",
".git/objects/33/daef170e2de94075cd42fd7035416910bb1205": "6e83ce5a42f570710e4661b648875f4b",
".git/objects/33/5cdc99458817a70b59e0a70f6490e2335fdecb": "39cf7472781bf160bb580c7158db571c",
".git/objects/a4/8dba155dc3dd891333d5e98057141e20e9dc2c": "dcea6362860b259d8ce7298d3e7ec66a",
".git/objects/b2/e3790b6a8f9110878e92a19e3c41b684baffe4": "3019bd57996fac70367b59246b345a08",
".git/objects/b2/edae24bfb51358e3ee40c2d1e667a9a3c50d36": "9eeedbd9f73059079191691a4b013bef",
".git/objects/bb/a843f304227c339dd3be8217cc057d9f75a7e6": "c4521fd6f32c25336bac56ba2cacafea",
".git/objects/df/ec4b0f31f07fcae01f8f65447b3ae884e059e6": "1321e46a5f301d9e4d5c69ba5d6721c9",
".git/objects/d6/cc0d287505412bc378e4e806c7d28c17b3234d": "a36cb3fd44c7bcb79d7bd7b70dd83352",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6e8a9dee20924bb68abccfc433652268837016": "df707a488119fddade1a67603f06415b",
".git/objects/ab/866417c0a7b610257749b9b84ad0214ea9b608": "4f6e66498b69521644769dc5b7efe00c",
".git/objects/e5/48f99bb2d0bc0bbfbecaaa2bea95f7a805105a": "f33d058668b6dc9f4ead6b6dbb059b62",
".git/objects/e2/78647d967503a510de4872c7900a1a78692ef5": "237dedd67c2bbfb6cc68af826b65c25c",
".git/objects/f4/c9f936fe0a4c5e8d08b831f1673c0c28103afb": "d377a140cbea650378ba5f0b838ef0de",
".git/objects/f3/b6e6e3b10f63723838e5c45dbce5d0eb8bb4bd": "9899486bd718faa343757e6664622d66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/ccb3a644bab3b6bf9972d7978d965ff26170e4": "0972fa70eb1af313a245ebfc648b8b97",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/cb6124804ee23887260f3411461e88326ccc46": "1df262c8f66b072044372224b2db1d3d",
".git/objects/c9/e73aa6bb031b1ac38698e2fa8b5c7ac76278b7": "d6694ce4c60d433385845c150c9c2ecd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/30b3bc5642cb3feb07c04c26ba5fc69f0aaf6b": "6cc9079e30fc8080b6211fdb1c89e5ad",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/1598bba95cfabd78dc821335c6c7057bdcbd03": "1907d7d4809765bb92f4df924ef7bcea",
".git/objects/cf/30236f07987f4ee2a803dda8b99d6fd1525eb9": "69ee9988dadc921c553fd0b8c20a94fa",
".git/objects/ca/4841caa9a50b5721cfcc0c60af0c769fc6227d": "b05768520922ec483b15cf3e503fdf93",
".git/objects/ca/16ecc2ee81ae092683e7e87741604356c6e014": "d28d19f7ec30cfcc6cfb4f3ba9f61afc",
".git/objects/fe/1d28c8e0af8d2cc75c63ea43ae03a2551938b5": "3d4aaa4eda38487b89aa0bbc985262e1",
".git/objects/c8/b11f6df976a7ba843a09ba519ad97f14ce2044": "f0e4e6dbc7947c804a07e7d3b6e11e1b",
".git/objects/c1/28fd0c70c69897015da21a573cf311049c66b8": "33cd2c18fd5962a2453b3e57d9bbac69",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/8ce47e355794fd7fa05e56d45a7bca6e6f09c1": "1601937316ea026a5cf22d86edc282ed",
".git/objects/4e/2b071bc030d8dfdb33e7e11198c5f18a3e1f2d": "a5d25d36e19446c19a5b3788be2e2ba0",
".git/objects/27/a620a2e9833667e45f6677720725397dc0b45b": "d8f0924d97f715a39125337089f5e6fd",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/c6476621fce1b5ee9d3bf1f2fa9592be50f155": "e46756fce43c6c6e42980e721adb345b",
".git/objects/7d/9c7c7798d13d12d718c0812aa833067725bcf4": "74b30052bfd95ccf2cbd64600926a8e4",
".git/objects/16/334922a2b09ff77b9dafe3a28af4f3987a1400": "fdb8583c59fb2617c7ea0eba9ff0710f",
".git/objects/16/3600b34a779616b121d924d9a7dce0c620cbae": "f000572902ac8bba4891aa69cb1380fd",
".git/objects/45/a652b3c13fe575caf0a65754ca33f10979d701": "dcf3f2471f0ebdc39e04971724123769",
".git/objects/1f/021b237dac4442b7d1a8034e9d4b597fc6bde5": "2c6bb31246396f7dee0dcb54b72a859b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/adeafe515929e71a365d286c599ec34fb9c0ec": "b6b905e5de8260db2042a1bd59f8cdea",
".git/objects/73/8d9ca20562c6cc8193b8187dd38e154fed2cfb": "02d51b0ad8595de358e5a763e114f893",
".git/objects/73/84743db517e34824608fcfb66bdd672ad284e4": "a579853c310993b7b630b5dd2ddbf82a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8f/eab2bd81c25da7c935dd18cbff930a03ce6cc9": "4f910a2c521f453a27a7bd318719aa5e",
".git/objects/8a/63d8159535b5e0395c930cbeabc2ab9b639d25": "176ecdc36b16f2d7b0a6fb9e8a629d42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/1f8613fed73789ec8775a876f3bdee80ee811b": "9d41587666dc32e44978342f4c71e7e0",
".git/objects/10/2c8b0eb51b6066f901ee5ca6834243fb1cbd06": "ecff3ac52959b27d1d2bbf2728c9c4cb",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/4c/468106f9c9c8328043c6a0733c73df5bf18bf2": "2f55374efcb54c4706ac3a4e53f54390",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2a/ee2944cf7baf2105cc43a573051142e70e8357": "19daa90a604938dc3ad862be44740f53",
".git/objects/43/5640ea563e51a2934b316128db5cae488307d5": "4821ef71faddd60574ee07e5c0cc3fca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/edc83cb1996555cc9588cef7aeff843d6db433": "d25b739f0260ce1fe6e5995bfa073e8d",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/31/c048c29538f6a665979571c6a1166ce1be2d53": "c47c8374a4cb5e9421b7ecd7ac55d5b3",
".git/objects/31/f1699b83c7a1362ec5983a2135dcc0952de364": "d0df97c51e18ca8a9cb9759ce524b9be",
".git/objects/31/826b1b3f86dafa493a3ccd3b0c187f81e334ce": "47aa506fadc493a07de73378fe57105d",
".git/objects/65/682c6d438ae0971709cd2b39c7b68bdc50c67c": "3b8a069082ddaaa11d54e097abd3b25b",
".git/objects/65/69c0d6687f96b8d2f30d50bfc57b43fe2248df": "f365eeb3243c6e7682f74415818e032c",
".git/objects/3f/837559593b3984f68648ad2c9fb6aa77972e6e": "cbbcc5864afa129fe82829d8c425a576",
".git/objects/30/8c01dd7b500afbe39febadc12818384a768044": "293fabc804f375f2a1e254112e86aed4",
".git/objects/5e/933156406ad54f3507dccb1bf33d6cfe133568": "2f79877e7672226225c4d8e3c1f4db51",
".git/objects/37/a957d7e1aed39ae5640a9f95dd98f75f1de140": "af50faad6cc78dee516fabdd28c5b59e",
".git/objects/37/86323cacc6f4b28852cb4f50f1545b4af02809": "f3f7d27bb412569b6ca47fc2b661768b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/a0f0cb45dde9a2af79a26f90a9a6f1f4d9fbd6": "9620c455c0751715f45b7d45b69ce224",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/f224f0363fa7a8e9218639b126920aa071cfdc": "3191ed788bbc941ec42a8f634b0b005e",
".git/objects/52/66d5ea6142d7c868ed64c1ba76c8fbe31da53f": "9aa5090ce4f1ef829eb577117cad339e",
".git/objects/52/f22d765616a8d0520f8f5beecc75a901078717": "9884a5ceaf09805f133b83df302d7c86",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/cda304bbe035daf10e40ef1bb975efb4443e30": "d8458c45576f4721b4bd6126aea88633",
".git/objects/0f/2d275d5695fcc217c7aa245dd0d38b67f7e93b": "b6af20fadc0e696b632cfa30f730dcc1",
".git/objects/0f/b6082a2306559124a77f31817aeb837e8a1f00": "ae75b5d5c187586a3a7070f861ae3902",
".git/objects/0a/2e56aa57dc5896f7d8bf81bc95f721dafea506": "5d26be851da739a5c68fe4b53027a105",
".git/objects/90/4050755908b4e4617882fda06f906afe1cd51a": "c5b9e6fec137d5efdd038c887b25f984",
".git/objects/90/af07df9aa1f42491320c5c93f726e43dcd180c": "4bee3d219fee7771039902d25c8dc596",
".git/objects/bf/e2edc1b7ff8306fe4543a7fd17a573923e0743": "1a3a83e2cd49d7d4bdaa1f5cf2786ef3",
".git/objects/d3/a5f66faa29a4b9172740f3a28d04996eb133d0": "8d34141b980ccceaa3d5c517739409b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/2289195ced341496f660a39a1cc95a7c20f753": "2a96fc838a640d170840adab0138c14d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/240652d5bde111ebde8e21d432835f3aaa1b47": "7d4b7f4bdda71401889e054e9b89f479",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/af71693e4a4e96739438640406f4f66c7a2dd4": "ef6fb6db6d409e534169e8ccc281a582",
".git/objects/dc/c6ae0aac32634e322b600dcb493702662dccb3": "419b5d45d00e9bc8b24bb2d2bef96638",
".git/objects/b6/8170b80a05ded6407ba4f4239a3bad8b716f7c": "b6a78f9b49b3d9f9cf66b403329716fe",
".git/objects/a9/58ff2ee66fce6bd18994c36ab6711ca31c48c8": "05090a59e3c2b6fd957e86a4980df71d",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/aa/b12ab2c19fa76b40dbb99ec06b5b56a7fee827": "c8c68982f9e92dc45c8caf745e9d0314",
".git/objects/af/bd3b27a7172eb6eee5eec447ece8153c09533d": "801a6b3359c3cbbc16a8e62ac030c5f3",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9c57600996de4f2403343f365b71e47d264194": "f0a67526f23193f5b0260002585f492c",
".git/objects/db/b51f5520f75d9fee3fe93f2356b2f160086322": "8ad07f1405ab2f828d085205b63cf406",
".git/objects/de/86b3f0e89e880d61988c12673918282ad452d1": "079b560e9c6e247ff450cfa123ca94ac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/2ecc4c4aa17ec23ab8f0631db3d609af21dd58": "96e0afd5718711b6f9f1c53743b8ca64",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/6be9cd2e6fd7b26a0dac536636bf0e2d7e91a8": "1a33ed33de778c3dd023eb8392807add",
".git/objects/c4/35cb685dc3b4cef991882d9eeb3102cd788fa4": "14bcc2035ac17432dcaf3086cbb0d67c",
".git/objects/e6/432d899cac36497164e69b8dbc81bf246d6140": "f6fdbfa79f323376e7b8ea2fb2895701",
".git/objects/f9/05e99bc8ad6f7e9c542b8e05cf4278200872cf": "29461e0f72cd9dad99e5e167bedaa24b",
".git/objects/f0/7e88a3b54704e7b4b87f7191683bdbd3b874ac": "63b170c687a3d6dce20e2c3be8ba0d30",
".git/objects/f7/27d875a3038f5862ecf2bd8892e9e698e5ce6d": "774db0524f1540c821b8e7f1b420c2c7",
".git/objects/f7/280db98be4ab5c7bb5f055ef1596aab8a871cd": "c20c24618d7bc77df7f1f908e184e544",
".git/objects/c2/65758cf74859d4bb343a850954ddc0d37fc75e": "7446953d2351b9aad0eeedfd3c101856",
".git/objects/ce/5aef96bc7e06ab11eb1d355481ea5dad932be9": "621e32460509fde2555a012bdf698152",
".git/objects/e0/27074649199e26e8fb7e7026d4cebf507643d0": "390edb6b249f8558cc93b64da890aaa8",
".git/objects/e0/5fbc95b38cb85d3aa6addd57735698995c5ffe": "bade8f3d6ea4c4ca73f683995350f47d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1bf712cfa1d2fd5762682044ccfbd0f34bd7d3": "568d39d4754c8464aac8a4cc47d14400",
".git/objects/79/9125abfd456bd9ae5a3e5591d88a0fcfebce18": "a925c2dd211f841763106c79aeeb5707",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/561a38eeb6f0bd295f9bf302eac5c145dda63a": "92ce06a1110ae0058104713670c85262",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/7b5bbdd890bd0e6bbcd9c219e67a4cff47c337": "0f46e1a54b9b7b9a87a618d28fd74688",
".git/objects/83/de2b664ea7fa2b9a8f46448c3051d0dd1c11e8": "17fe2b5d7e5c01d42fd1c8f93cf32464",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/48/eeda5448bbbf903c2c599c7b91becaaae18062": "58aae8f47ae22df195e07805c6b5aa7b",
".git/objects/70/f1035bd1837262e385d84d05a56e25188b30a1": "d4cd61ffd17007145a4e623bc334ab72",
".git/objects/24/8185ffa08db0fa3c97851803e705ef1f43e28a": "0946ed7bddebc3320b0b997129199da3",
".git/objects/24/f1595e1165436a25399854df802b58e613b4ff": "dc7cae097b9eefebe85cd808a6e646e8",
".git/objects/23/cb54133e5e26c3b6ef7c37633dcc0c986d1815": "08b86987cacb6e90e26adef4fd6ad9a5",
".git/objects/4f/6c8244a3c87bbf7a32ad0c7522d8386596f53b": "a456623cfde0bf4d4e18d0459e801dec",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/51fe0263479618d5071d879cac17a19061a396": "aef458931c16dfa77cefeb5293669dd0",
".git/objects/15/692a583fb77c7761ea084ee44b5363030181d9": "44297db39bd7dd81a2ed91e47555bb3b",
".git/objects/12/9f985399d155ed51ca11aa8c58cfbf68e4210a": "bc7ee0f59149196348cf412f765b0de8",
".git/objects/12/5ae2e891affa21130a14af69dca1907f4978af": "7b4b1d3f37a6eca6a0e9cd84984de096",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/73ee69c17dfa16c1b02f44ad7570cfecd295f1": "13bf88bc5af6efc69617d72a7e5d6be9",
".git/objects/71/8d23adf416454d73e6bb430f0796aa9262d164": "b1d11a3aca4a777384b44a15ea620a47",
".git/objects/1c/0641d33cac5ac0e66449ecfe96b5ad2bd3be23": "d392a57c8c1ef0ceb9fc046f84f98ae7",
".git/objects/82/3264ed92ca86eddcce3fd334c83cb667c44f36": "90a8afe57ade13140fb90a87ef7adad3",
".git/objects/49/4eb0f1c7622208b14c9e24fad1be60ceaf1f66": "9b4289ebdbf22cdf696cb18f0133c725",
".git/objects/78/bcfcf928d5d39ee43c452d4cc25db835136d7b": "b75da718e84545e9db785b68af5b6319",
".git/objects/8e/4cfe52f7360b8e4035bf853c227c1b0c18365f": "f6547bf22fe3304492740a41e6c26c00",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4885609fe09b41410ae00ee38553ae5c",
".git/logs/refs/heads/main": "fb0ce3ce5cd71a2a3986425954f38c8d",
".git/logs/refs/remotes/origin/main": "3b414822802752091361775b4c99d055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "081d9e876d15caf300ea33f5301fc60e",
".git/refs/remotes/origin/main": "081d9e876d15caf300ea33f5301fc60e",
".git/index": "3f8a40bf84afa56f12588ec26d551249",
".git/COMMIT_EDITMSG": "71417aaf496cfb3ca50cd02293922f0b",
"assets/AssetManifest.json": "ecf6a19dc3f3881aafddf02b63d5ad5f",
"assets/NOTICES": "b0cad5be4cc2888b1c6d81241c5def07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "baf4d60bc6b4f605df0bb6ecb1219dd3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "53fdc120f27c5b7bcaebae723a3419e1",
"assets/fonts/MaterialIcons-Regular.otf": "a64b2e86530f93a085cb0e1112384848",
"assets/assets/images/icon_out_scan.png": "c63bc3330a081d336bd93c2ca9955014",
"assets/assets/images/header_wallet_hd_wallet.png": "bf41540bf485f881c679f76eef34862e",
"assets/assets/images/my_wallet_bg_black.png": "6d414d7bb97f5e83f8248bcd6c011627",
"assets/assets/images/bg_splash.png": "9178d8c1056142612ee4601e0bb50811",
"assets/assets/images/tab_icon_home_nor.png": "b17ccc3dc1f3356b6e51a67cf84304d0",
"assets/assets/images/icon_about.png": "92d102176470fa4f1dde2a511513365f",
"assets/assets/images/icon_download.png": "a26b341cffdd1e0a05fc6d2d47c18283",
"assets/assets/images/my_wallet_coins.png": "13ae856c9266a9c3fd99b59dedce4bdd",
"assets/assets/images/home_top_wallet.png": "729e6a95563d40b153dc7c12af35481a",
"assets/assets/images/ic_right.svg": "7e119bf315267424bdf0d59ebe514db3",
"assets/assets/images/bg_share_er_code.png": "18f2c36564821cb4b25e2320ab38629f",
"assets/assets/images/tab_icon_my_nor.png": "b1d7b59050ebd3a7b3d855aa2173cebf",
"assets/assets/images/icon_share.png": "c68fac642746526f361250c328f351d6",
"assets/assets/images/ic_app.png": "1812363cdfb3581b72fdd5c5e91ab1c0",
"assets/assets/images/import_wallet_right.png": "f713820136ce093d661bf3e0d1f5f637",
"assets/assets/images/tab_icon_explore_nor.png": "15a16d7f1fd1331d5b572eeb6df2cf5b",
"assets/assets/images/header_wallet_add.png": "143a7c3546522bc8f2d7f678fd234683",
"assets/assets/images/tab_icon_my_select.png": "2b3fc6340455db440f91d1bac2fb596c",
"assets/assets/images/tab_icon_explore_select.png": "d7a64aa67bd7c6ac1a4f1becbea5706b",
"assets/assets/images/my_contacts.png": "6132f978edbe9d44cceb6d7d70c4649c",
"assets/assets/images/icon_language.png": "c2792b4f88ebe9a793f054574c13c4b0",
"assets/assets/images/home_top_left.png": "f07ff622bbbee485d340a19ab4324908",
"assets/assets/images/header_wallet_more.png": "4b294c9f823edabb8d912a9e70a83ec6",
"assets/assets/images/tab_icon_home_select.png": "f3a7e7c463f59c12b2efa484daa08968",
"assets/assets/images/my_message.png": "77f1fe2a8fa102d6ecdc7da3c3822bbe",
"assets/assets/images/my_wallet_current.png": "aea7f793abd8e3abce7e9efbd405b214",
"assets/assets/icons/e3e6895d9f3bcaeb2fc38802cdde1b16.png": "b099eca1e91aa57bce528feebc55080c",
"assets/assets/icons/enigma.png": "2c4b7ab0c97c2453ec398ead49c6832c",
"assets/assets/icons/a9105ade2d35a1592b23545a24f6248b.png": "62cae38f27ab38dbfd797581c877ab5d",
"assets/assets/icons/683aeea27ae6577e98cc2b3d1feeb061.png": "62cae38f27ab38dbfd797581c877ab5d",
"assets/assets/icons/72c23eda66f8f2d4aaacdc71d973a29c.png": "051214f2ae8874e8b6e9879bd8978cdb",
"assets/assets/icons/utrust.png": "1e8ff98f0e8cb28255abb0a41c65b9f8",
"assets/assets/icons/santiment.png": "3f214f223f991c1249553051f7749924",
"assets/assets/icons/08712750389ab6c92deae50b54fc0012.png": "ca18a9c88e2ba299f3bac3c1544ac796",
"assets/assets/icons/ethlend.png": "43609cb6a0bcb62af206cf2a499b6c1d",
"assets/assets/icons/kin.png": "ee6174b96fd3d4efe832f6da52ca720c",
"assets/assets/icons/c916b6067d2cb61cc5ef2f4e1b682946.png": "ca18a9c88e2ba299f3bac3c1544ac796",
"assets/assets/icons/4df97b33dc91c5e2d945572ef12a138e.jpg": "c334a103519b116f9059666e4b30d857",
"assets/assets/icons/blockv.png": "a0b95fefcd446ddae924e16fca779d89",
"assets/assets/icons/6f70a11b3911301b6836b28dce8f12d3.png": "e345249587ed31102409f2db56e8f785",
"assets/assets/icons/7be9b137accdb769828a69080e524f92.png": "db96fbbef67770142016c7c27f95f4e6",
"assets/assets/icons/eidoo.png": "c70c0b0d47eaa651dd9d153d2a8942ac",
"assets/assets/icons/e75aac1ad3f0e8c7fba147edbff53469.png": "ff225fc30d0559dd1810aeba8db129ec",
"assets/assets/icons/decentraland.png": "fa8008cb62144c85e606d864d62168b8",
"assets/assets/icons/mybit-token.png": "d04be8a8b9dc2e53b203f4f60d7a2ea6",
"assets/assets/icons/834b12284a6a5cee9ed5d1937e292b70.png": "9ff31596640a5af866cb2d0157e362c4",
"assets/assets/icons/wabi.png": "8d7e9d0775bc322961fd794707b99545",
"assets/assets/icons/dd069dfef3b7d7af31cf75d610b2a109.png": "ff225fc30d0559dd1810aeba8db129ec",
"assets/assets/icons/ripple.png": "fbef050d359fb7a198f6da4c85eafbae",
"assets/assets/icons/8568e340ae44fcd01bddf84a3eb2d7aa.png": "62cae38f27ab38dbfd797581c877ab5d",
"assets/assets/icons/veritaseum.png": "0796f8568b6e25eb0d3ee77923f48de7",
"assets/assets/icons/telcoin.png": "b97e5ef0115e97f0efb4fac669f71633",
"assets/assets/icons/substratum.png": "499462fb05818012ac18e10ab47b6456",
"assets/assets/icons/dynamic-trading-rights.png": "c382eb7846ac67248dee41fc0aaebaaa",
"assets/assets/icons/4cffc932fd2489ad63cb10dc987edc51.png": "989d691e28d91fdd1444795e5234eaea",
"assets/assets/icons/edgeless.png": "659c74af88d6b2e75a912b7b491f52b0",
"assets/assets/icons/cad48c7bc2573ac159d01ed6e82fd54d.jpeg": "333a4dc77581ea78944220b0d236cca8",
"assets/assets/icons/d98b68de941c1110b4dbd89c2eb19d00.png": "5dbc0789336c35f7ed02899d5f977416",
"assets/assets/icons/gnosis-gno.png": "3f24c35bd8c1f1db717400d5a7c7ce70",
"assets/assets/icons/68bfc937ea2c394ef91f705c6e08c93e.png": "a71917128048639ab1681ece3b28bc3f",
"assets/assets/icons/poet.png": "b29acd569873d36df59226bdb4d25e23",
"assets/assets/icons/credits.png": "89fa7b01af4302e8bf90c09a80739630",
"assets/assets/icons/78247c8a5b594566518b64cc6f324945.png": "e345249587ed31102409f2db56e8f785",
"assets/assets/icons/storj.png": "e978ec3ae8fe1d0ba06c3ac9c26ccf16",
"assets/assets/icons/enjin-coin.png": "ecd1f18eee391ce9a609d0c3f4c80bdb",
"assets/assets/icons/bb239bb56664f2dcdf2162fb9530ee8a.png": "64bb673816b5ff7ead7a47d7f1c6acd5",
"assets/assets/icons/civic.png": "0d64a8812fcb7aeff712c34298dcced4",
"assets/assets/icons/4fc4d2dba2c6793d90b3ccd1408fe9be.png": "411be90e301b38d32a4b834e5695ef20",
"assets/assets/icons/power-ledger.png": "72caeb35349613a04d447aef46109b08",
"assets/assets/icons/886d8fcbba9804bfb662b067ebb5e3b5.jpg": "e90c2f21736099367782604fcd83e322",
"assets/assets/icons/8fdeb68d8982f5ea5de1713038c505d2.jpg": "6cff987b523e01526bb653e2dd97b686",
"assets/assets/icons/6dd9cd4fa0e83093d92ecd5b2fd7454b.png": "3012d238586029457fe1947f8ad8da62",
"assets/assets/icons/dragonchain.png": "0c06e17415b0ee5b276cc0bf8e1ffae4",
"assets/assets/icons/5f47a503f8dd925e5ed4e81173511e05.png": "a930a582687212a4079f58c6a63e04c8",
"assets/assets/icons/gifto.png": "fe0acdfebb9bfcd0101ac74b19d431cb",
"assets/assets/icons/district0x.png": "6bf8b7f9bb2442017be5d1aa7ccf3666",
"assets/assets/icons/f3bc3704f5e7aea4a3fb0caba63d3bde.png": "ca18a9c88e2ba299f3bac3c1544ac796",
"assets/assets/icons/9bbbd15fdaf37f85b224c3d96f4a457c.png": "ed81b0c6d23351074b73f829e9a4d391",
"assets/assets/icons/storm.png": "dc64e8d83e0f7177460ea12dc523d498",
"assets/assets/icons/sonm.png": "8d12cfc56b3b4ad9151770b91749a9d8",
"assets/assets/data/token_list.json": "198f3433cbc6f83cf776a8a9f24a3ed9",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
