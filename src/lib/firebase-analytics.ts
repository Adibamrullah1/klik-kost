"use client";

import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "./firebase";

export const initAnalytics = async () => {
  const supported = await isSupported();
  if (supported) {
    const analytics = getAnalytics(app);
    return analytics;
  }
  return null;
};
