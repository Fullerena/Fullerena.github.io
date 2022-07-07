const calculator = "calculator";
const assets = [
  "/PWA/",
  "/PWA/calculator.html",
  "/PWA/lit.css/lit.css",
  "/PWA/lit.css/util.css",
  "/PWA/alpine.min.js"
  ];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(calculator).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
