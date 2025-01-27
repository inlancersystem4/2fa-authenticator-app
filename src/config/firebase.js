import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyAfbCRIgmOUIpn0RksPt4m0VzREYWPlcT8",
  authDomain: "fa-fastapi.firebaseapp.com",
  projectId: "fa-fastapi",
  storageBucket: "fa-fastapi.firebasestorage.app",
  messagingSenderId: "951348884560",
  appId: "1:951348884560:web:245dd50b420c74de324d55",
  measurementId: "G-YNMPEGFCCE",
};

export const FIREBASE_VAPID_KEY =
  "BJ4ZpgLlHuETQrg0KFSA0ysdWGdRJiHT5GJKO3RDgdeIh3XGcZcVnyqUawfnqkw3VurNUgUrtcQcbp4yu3HsIaY";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: FIREBASE_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        return currentToken;
      } else {
        alert(
          "No registration token available. Request permission to generate one."
        );
        return null;
      }
    })
    .catch((err) => {
      alert("An error occurred while retrieving token - " + err);
      return null;
    });
};

onMessage(messaging, ({ notification }) => {
  new Notification(notification.title, {
    body: notification.body,
    icon: notification.icon,
  });
});
