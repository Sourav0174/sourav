'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7737a09c32abd037eb6d2a0bc7b15902",
"assets/AssetManifest.bin.json": "cdf9ba4370b61ed2860eed2764bf50b0",
"assets/AssetManifest.json": "e34dba2dae524829dab8e9dec49b3781",
"assets/assets/animations/developer.json": "26b8837344313347103f15ff601df385",
"assets/assets/images/bellabites/bellabites_1.jpg": "3c9e5e295d1f09b6a8d61c0b0948ecc1",
"assets/assets/images/bellabites/bellabites_2.jpg": "0c18750be2e86c951c28481ca5f68c9d",
"assets/assets/images/bellabites/bellabites_3.jpg": "7a9c2213e2aa5b4d8bbeef077f474bdf",
"assets/assets/images/bellabites/bellabites_4.jpg": "e57f11c0061c38d6e89bcf4eb5404d5d",
"assets/assets/images/bellabites/bellabites_5.jpg": "d4bb50679de4face6d6296767d16a9fb",
"assets/assets/images/bellabites/bellabites_6.jpg": "68d470c498580208bb6a50d9e865119e",
"assets/assets/images/bellabites/bellabites_7.jpg": "d262e02ddad856ee7748af7fa972e57d",
"assets/assets/images/bellabites/bellabites_8.jpg": "f5f3612909df8e65453fb5baecbc9b47",
"assets/assets/images/flexx/flexx_1.jpg": "b164037f9940dcebc3fa3d020a26b064",
"assets/assets/images/flexx/flexx_2.jpg": "bc7ebad21c26932ac13b5b502ebe7d63",
"assets/assets/images/flexx/flexx_3.jpg": "f96778f406f1307ac610ce1e7f80d31b",
"assets/assets/images/flexx/flexx_4.jpg": "40c94e83e570d8f4dee0a32675ba1a11",
"assets/assets/images/flexx/flexx_5.jpg": "e1b98528ef8786b4cd56102e5e5d2b84",
"assets/assets/images/flexx/flexx_6.jpg": "c9d7367c36d540640c6ab274813f2634",
"assets/assets/images/flexx/flexx_7.jpg": "45c75dbe4dcacb68a0107ff493fdd391",
"assets/assets/images/flexx/flexx_8.jpg": "e1316c1455be23c1e0f155e97abf1320",
"assets/assets/images/flexx/flexx_9.jpg": "b6a571af9f12d6758693bfef57d69162",
"assets/assets/images/linkup/linkup_1.png": "8e4a336dcabc6dd45096e3cb031739da",
"assets/assets/images/linkup/linkup_2.png": "c7296a3b061b4ad8248d11977c2193ed",
"assets/assets/images/linkup/linkup_3.png": "cab3e95b5d4356b53d788c555fd603fc",
"assets/assets/images/linkup/linkup_4.png": "a61cc0e4212719986cfc2ad078d08618",
"assets/assets/images/linkup/linkup_5.png": "6e57adf9fe2b57536b403e030fbbdfc2",
"assets/assets/images/linkup/linkup_6.png": "89a9ba46eb1aba7806ae3637029179ae",
"assets/assets/images/linkup/linkup_7.png": "8d96f2af2f1c818ab6643b5d0d088335",
"assets/assets/images/linkup/linkup_8.png": "a61cc0e4212719986cfc2ad078d08618",
"assets/assets/images/qsnap/qsnap_1.jpg": "542970746d14e743f26716e39bacffb3",
"assets/assets/images/qsnap/qsnap_2.jpg": "0fda84c2e38109eff4a816e1c3effea8",
"assets/assets/images/qsnap/qsnap_3.jpg": "1e9e324ba1c6e5debc55293f45a1994f",
"assets/assets/images/qsnap/qsnap_4.jpg": "fbf44132bb6835e7f57349e21d4d7cdf",
"assets/assets/images/qsnap/qsnap_5.jpg": "17e7c30131bf8a3020905c28c3f3fe70",
"assets/assets/images/qsnap/qsnap_6.jpg": "585feade95558c2875f9b698fc1cf7c7",
"assets/assets/images/rise_above/rise_above_1.png": "2f7da860668d0a4525ab9bc931cbb8e2",
"assets/assets/images/rise_above/rise_above_2.png": "bb5998590b827c5224c705a81ca70b85",
"assets/assets/images/talksy/talksy_1.jpg": "ffcbbdbccffb0ff88830de99dbe981dc",
"assets/assets/images/talksy/talksy_10.jpg": "102bb3d4b265b00fbd9de124dafd3569",
"assets/assets/images/talksy/talksy_11.jpg": "92a42d26b7a4c8e1098b057fa104f19f",
"assets/assets/images/talksy/talksy_12.jpg": "9a3f20aa9a315d02d46c6b2e8398e2f5",
"assets/assets/images/talksy/talksy_13.jpg": "6f3417e5d1caaf35306f7b22b5f8dfd9",
"assets/assets/images/talksy/talksy_14.jpg": "75e49f9a213366d25e0d01d9656a0b77",
"assets/assets/images/talksy/talksy_2.jpg": "469f47235a6f5a622a9947b9c8641524",
"assets/assets/images/talksy/talksy_3.jpg": "c85cb089fe7dda7ba2c4a395843944b6",
"assets/assets/images/talksy/talksy_4.jpg": "3004cb86510a43eb7b9c2277f3c3ed71",
"assets/assets/images/talksy/talksy_5.jpg": "d3aebb37e32e5e492b8ec06ea9eda362",
"assets/assets/images/talksy/talksy_6.jpg": "97ea649b67e6400fa27cc7fb0a98b70e",
"assets/assets/images/talksy/talksy_7.jpg": "4f01cd0e25c5887de72429f3dd5138f2",
"assets/assets/images/talksy/talksy_8.jpg": "35329f06d74459e1d236eb9238073041",
"assets/assets/images/talksy/talksy_9.jpg": "653451718909b2aa74321215210362c8",
"assets/assets/logo/logo.png": "feb9126e59e61883cce52cb7d951f6d7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a5a7923548d3bc140960f809e4b477b2",
"assets/NOTICES": "730a0bb9d941c48ba7eca726a071457e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "768b63addcfcd5ae390ce8d42dc9ec24",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6390a536c749fb23f075b99dfa768f48",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "9b1363e31363a9ae83cf9dc3f851ee7d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ad6296ec2ae29a2622d388e52c6e2d34",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d3602433681001281841f3b6aa5fed6",
"/": "9d3602433681001281841f3b6aa5fed6",
"main.dart.js": "d8178113412d589898f53438c4d92660",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
