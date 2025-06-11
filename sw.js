const CACHE_NAME = 'trybook-v1';
const urlsToCache = [
  '/trybook/',
  '/trybook/index.html',
  '/trybook/manifest.json',
  '/trybook/sw.js',
  '/trybook/icon-192x192.png',
  '/trybook/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
});
