self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title;
    const options = {
      body: data.body,
      icon: data.icon,
      badge: data.badge
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  