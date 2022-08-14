import { getAnalytics } from "firebase/analytics";
import { persist } from "zustand/middleware";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  useDeviceLanguage,
  User,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { useEffect } from "react";
import create from "zustand";

const firebaseConfig = {
  apiKey: "AIzaSyBa4_H-xvrTPnNDpjV0D3pPktGpXf4yqKQ",
  authDomain: "cekdoc-app.firebaseapp.com",
  projectId: "cekdoc-app",
  storageBucket: "cekdoc-app.appspot.com",
  messagingSenderId: "344857963853",
  appId: "1:344857963853:web:699070270a673f0ccb9b04",
  measurementId: "G-P7DTQ42V9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const analytics = getAnalytics(app);

useDeviceLanguage(auth);

export const useAppStore = create(() => ({
  fireApp: app,
  fireAuth: auth,
  fireDb: db,
  fireAnalytucs: analytics,
  user: null as User | null,
}));

export const useAuthStore = create(
  persist(() => ({
    isLoggedIn: false,
  }))
);

export const useAuth = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      useAppStore.setState({ user });
      useAuthStore.setState({ isLoggedIn: !!user });
    });
  }, []);
};
