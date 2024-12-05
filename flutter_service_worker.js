'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "370e406255104e03d7be1017eae7512b",
"version.json": "7e9430fce1d15c6adadb313deff59909",
"index.html": "830c3ee812591cd03015c75f602c3dcb",
"/": "830c3ee812591cd03015c75f602c3dcb",
"main.dart.js": "50ebc0e93712ea82f24ec785dd5610a2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "57d5d33118a232d25e87e66654d25eab",
"assets/AssetManifest.json": "ad1bf9cd94396d70f80bdeecb608be3b",
"assets/NOTICES": "a2ba95c494ac3df00927ef22d9fe5c24",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "f1db546c772045be54c135d3025ce612",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7034ae8d65ccbb03ad512013a6ffb25",
"assets/fonts/MaterialIcons-Regular.otf": "84fd8a4a45e5a04a1d7c204783a50358",
"assets/assets/images/world-globe-line-icon.svg": "aa4b839cf6ca761edc536146138be6a5",
"assets/assets/images/icons8-youtube.svg": "6c3781437eadf78643698de65b648042",
"assets/assets/images/tab1.png": "03ffd68bebf244425089ebdc42556b9e",
"assets/assets/images/oncourse_marshal.png": "3c695c0cba2d9d0fb9022e44db124750",
"assets/assets/images/ion_eye.svg": "81e4ba43a53bdf16386d6cfbfa366358",
"assets/assets/images/icons8-linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/images/bxs_dish.svg": "58313a934192ff21d05c44adfd54760a",
"assets/assets/images/instagram.svg": "54d84ee78b097666aedf523b2fcec20a",
"assets/assets/images/oncourse_fb.png": "5c1061c8b9c1c018bfb4ebaa187886e9",
"assets/assets/images/oncourse_firstaid.png": "d803738fbb00d72ef6a872ece7db8687",
"assets/assets/images/twitterx.svg": "39af473a1c96c98ebbfacd11d5f003a3",
"assets/assets/images/icons8-instagram.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/assets/images/icons8-twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/assets/images/find_game_dummy.png": "804eeb9d9e7a31624e85a3599332b947",
"assets/assets/images/weather.png": "015046c6dba1a72344b67685648e1f70",
"assets/assets/images/thubnail_logo.png": "63c54b4d18be5787c6cb3fccf3f3e3b0",
"assets/assets/images/facebook.svg": "ced8d01917a230d8eea47e513a8dfe0b",
"assets/assets/images/globe.png": "1602b0ac055786c59e29aa3580873e9b",
"assets/assets/images/clock_black.png": "c665c40489c028ed8b61898c36c8f908",
"assets/assets/images/oncourse_layout.png": "f18268376f1ce8a76990d24417306b16",
"assets/assets/images/tee_off_booking.svg": "1e830117d1e519d9c03ecdbf707feb40",
"assets/assets/images/ion_golf-sharp.svg": "016872ef352814fe2f513b641ff1aa33",
"assets/assets/images/facebookicon.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/images/DLF-Golf-Country-Club.jpg": "4c79b917906308945614838e6f5cc667",
"assets/assets/images/oncourse_pin.png": "ef28f2670f9bf958c6b1db6ab9f57d0f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
