const CACHE_NAME = 'cache-v2';

self.addEventListener('install', e => {
  console.log('install', e);
  /* e.waitUntil(new Promise(resolve => {
    setTimeout(resolve, 5000)
  })) */  //  等待几秒执行
  // e.waitUntil(self.skipWaiting())
  e.waitUntil(caches.open(CACHE_NAME).then(cache => {
    cache.addAll([
      '/',
      './index.css'
    ])
  }))
})

self.addEventListener('activate', e => {
  console.log('activate', e);
  // e.waitUntil(self.clients.claim())
  e.waitUntil(caches.keys().then(cacheNames => {
    console.log(cacheNames)
    return Promise.all(cacheNames.map(cacheName => {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName)
      }
    }))
  }))
})

self.addEventListener('fetch', e => {
  console.log('fetch', e);
  e.respondWith(caches.open(CACHE_NAME).then(cache => {
    return cache.match(e.request).then(res => {
      if (res) {
        return res
      }
      return fetch(e.request).then(res => {
        cache.put(e.request, res.clone())

        return res
      })
    })
  }))
})
