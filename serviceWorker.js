const staticRiverside='Riverside-v1';
const assets=[
  '/',
  '/index.html',
  '/image/apple-touch-icon.png',
  '/image/favicon.ico',
  '/image/favicon_16.png',
  '/image/favicon_32.png',
  '/image/favicon_192.png',
  '/image/favicon_512.png',
  '/image/background.jpg',
  '/image/profile.png',
  '/style/main.css'
];
self.addEventListener('install',installEvent=>{
  installEvent.waitUntil(
    caches.open(staticRiverside).then(cache=>{
      return(cache.addAll(assets));
    })
  );
});
self.addEventListener('fetch',fetchEvent=>{
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res=>{
      return(res||fetch(fetchEvent.request));
    })
  );
});
