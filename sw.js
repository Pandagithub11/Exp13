var cache ='mysite';
var urlstocache = [
    '/',
    'indiex.html'
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cache)
        .then(function (cache) {
            console.log('opened cache');
            return cache.addAll(urlstocache)
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });