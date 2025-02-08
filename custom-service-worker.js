self.addEventListener('install', () => {
    self.skipWaiting(); // Activate the new service worker immediately
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'updateReady' }); // Notify the client that a new version is ready
            });
        })
    );
});