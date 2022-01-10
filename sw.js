self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nstevens1040-store').then((cache) => cache.addAll([
      './index.html',
      './favicon.ico',
      './favicon.svg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});