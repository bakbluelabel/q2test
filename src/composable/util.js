import { SessionStorage } from "quasar";

export function getStorageItem(key) {
  let val = SessionStorage.getItem(key) || "apa lanciao";
  return val;
}
