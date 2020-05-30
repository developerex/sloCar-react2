const pwaCache = 'pwa-ad-images-1';

const staticCache = [
  '/barva.png',
  '/euro.png',
  '/letnik.png',
  '/menjalnik.png',
  '/motor.png',
  '/novo.png',
  '/oblika.png',
  '/pogon.png',
  '/poraba.png',
  '/prevozeni.png',
  '/priljubljeno.png',
  '/priljubljeno2.png',
  '/primerjaj.png',
  '/primerjaj2.png',
  '/prostornina.png',
  '/vrata.png',
  '/close.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(pwaCache).then((cache) => {
      cache.addAll(staticCache);
    })
  );
});

self.addEventListener('activate', (e) => {});

self.addEventListener('fetch', (e) => {
  // cache with network fallback
  let res = caches.match(e.request).then((res) => {
    // check if cache has response
    if (res) return res;

    // fallback to network
    return fetch(e.request).then((fetchRes) => {
      // cache fetched response
      caches.open(pwaCache).then((cache) => cache.put(e.request, fetchRes));

      // return clone of fetched response
      return fetchRes.clone();
    });
  });
  e.respondWith(res);
});
