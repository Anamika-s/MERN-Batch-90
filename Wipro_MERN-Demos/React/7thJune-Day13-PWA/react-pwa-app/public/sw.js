let CACHE_NAME ="cachecontents"

var urlCache =
[
  "/static/js/bundle.js",
  "https://jsonplaceholder.typicode.com/users",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/"
]

// install service worker
this.addEventListener('install', (event)=>
{
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>
    {
      return cache.addAll(urlCache)
    })
  )
})

// Fetch cache data

this.addEventListener('fetch', (event)=>
{
   if(!navigator.onLine)
   {
     console.log("Offline")
     event.respondWith(
       caches.match(event.request)
       .then((response)=>
       {
         if(response){
         return response;
       }
       let url = event.request.clone()
       fetch(url) 
      })
)
} 
})

