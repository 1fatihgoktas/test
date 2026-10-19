const CACHE_NAME = 'nodeapp-v1';
const ASSETS = [
  '/',
  '/manifest.json'
];

// Yükleme aşaması
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// İstekleri yakalama
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Çevrimdışı kalındığında gösterilebilecek alternatif durumlar eklenebilir
    })
  );
});