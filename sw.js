self.addEventListener('install',e=>{
    e.waitUntill(
        caches.open("static").then(cache=>{
            return cache.addAll(["./index.html", "./css/style.css"]);
        })
    );
});

self.addEventListener('fatch',e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{return response|| fatch(e.request);})
    )
});