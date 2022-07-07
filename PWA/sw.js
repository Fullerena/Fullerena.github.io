const calculator = "calculator";
const assets = [
  "fullerena.github.io/PWA/",
  "fullerena.github.io/PWA/calculator.html",
  "fullerena.github.io/PWA/lit.css/lit.css",
  "fullerena.github.io/PWA/lit.css/util.css",
  "fullerena.github.io/PWA/alpine.min.js"
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
