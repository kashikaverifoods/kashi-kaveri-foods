const CACHE='kk-foods-v4';
const ASSETS=['./','./index.html','./style.css','./manifest.webmanifest','./logo.png','./icon-512.png','./idli-feature.jpg','./kachori.jpg','./food-story.jpg','./grilled-sandwich.jpg','./cheese-corn-sandwich.jpg','./pizza-sandwich.jpg','./paneer-tikka-sandwich.jpg','./diet-brown-sandwich.jpg','./idli-sambhar.jpg','./kachori-card.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./'))))});
