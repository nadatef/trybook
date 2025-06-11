const CACHE_NAME = 'trybook-v1';
const urlsToCache = [
  'index.html',      // No prefix!
  'manifest.json',
  'sw.js',
  '6.jpg',
  '7.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
