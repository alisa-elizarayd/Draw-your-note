/* Draw your notes — offline-first app shell. Bump CACHE_VERSION for new releases. */
const CACHE_VERSION = 'draw-your-notes-v4-20261118';
const APP_SHELL = ['./','./index.html','./manifest.webmanifest','./favicon.svg','./icon-192.png','./icon-512.png','./icon-512-maskable.png','./apple-touch-icon.png'];
const BASE = new URL('./', self.location.href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION)
    .then(cache => cache.addAll(APP_SHELL.map(path => new URL(path, BASE).toString())))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key.startsWith('draw-your-notes-') && key !== CACHE_VERSION).map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE.pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(async () => (await caches.match(new URL('./index.html', BASE))) || Response.error()));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
