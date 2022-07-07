const calculator = "calculator";
const assets = [
  "/",
  "/calculator.html",
  "/lit.css/lit.css",
  "/lit.css/util.css",
  "/alpine.min.js"
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
