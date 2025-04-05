// src/utils/authMarvel.js
import md5 from "md5";

export const getMarvelAuthParams = () => {
  const ts = Date.now().toString();
  const publicKey = import.meta.env.VITE_PUBLIC_MARVEL;
  const privateKey = import.meta.env.VITE_PRIVATE_MARVEL;
  const hash = md5(ts + privateKey + publicKey);
  return { ts, apikey: publicKey, hash };
};
