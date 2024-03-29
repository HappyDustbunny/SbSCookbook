
let VERSION = 1.007; // Change version number to facilitate updates
let SBSC_CACHE = 'SBSC-cache';
let CACHED_URLS = [ // Copy project path from EVERY entry to avoid mistakes
  'components/modal-init.js', // Check that ALL files have an extension
  'components/modal-window.js',
  'favicons/favicon-192.png',
  'favicons/maskable_192.png',
  'favicons/favicon-512.png',
  'aboutStepByStep.html',
  'changeTextSize.png',
  'favicon.png',
  'favicon.ico',
  'jquery-3.5.1.min.js',
  'cookbook_print.css',
  'cookbook.css',
  'cookbook.html',
  'cookbook.js',
  'LICENSE.txt',
  // '/',
  'manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(SBSC_CACHE).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // console.log('Fetch request for: ', event.request.url);
  event.respondWith(caches.match(event.request, { ignoreVary: true }).then( // ignoreVary should make the cache match ignore flags and stuff that can make a mathc fail unintentionally
    function(response) {
      if (response) {
        // console.log('Yay, retrieved from cache!', response.url);
        return response
      } else {
        console.log('Strange, requested online request...', response);
        return fetch(event.request);
      }
    }).catch(function(error) {
      console.log('TFT Cookbook serviceWorker responded with error', error);
    })
  );
})
