"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(function (registration: ServiceWorkerRegistration) {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );

          // Check notification permission
          if (Notification.permission === "granted") {
            // Permission already granted
            console.log("permission already granted");
            registration.showNotification("Vibration Sample", {
              body: "Buzz! Buzz!",
              icon: "/images/my-photo.jpeg",
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: "vibration-sample",
            });
          } else {
            // Request notification permission
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                console.log("permission granted");
                registration.showNotification("Vibration Sample", {
                  body: "Buzz! Buzz!",
                  icon: "/images/my-photo.jpeg",
                  vibrate: [200, 100, 200, 100, 200, 100, 200],
                  tag: "vibration-sample",
                });
              }
            });
          }
        })
        .catch(function (error) {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex items-center justify-center text-8xl text-[#987401] pb-12">
        Charles Wefso
      </div>
      <Image
        src={"/images/my-photo.jpeg"}
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full"
      />
    </main>
  );
}
