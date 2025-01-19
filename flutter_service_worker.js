'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ceb084945a9ada15c0a866dbdf8e693a",
"version.json": "916383b9fca9cd3dbb7f138a2b99b047",
"index.html": "d2ae2ba06e518f3076887facdd330949",
"/": "d2ae2ba06e518f3076887facdd330949",
"main.dart.js": "7b7dccfc6aad57a0a291448096dda841",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c41ff551d66379e94b761ff0ae35fa0",
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
"assets/fonts/MaterialIcons-Regular.otf": "91ad0b8f784842bcaa8e5942b570936b",
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
"assets/assets/data/token_list.json": "987990188530718d63dda420b1ccc7f1",
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
