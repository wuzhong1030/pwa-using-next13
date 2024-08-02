
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});

self.addEventListener("push", (event) => {
  const data = event.data.text();
  const options = {
    body: "This is the body text of the notification",
  };

  event.waitUntil(self.registration.showNotification("New Notification", options));
});


