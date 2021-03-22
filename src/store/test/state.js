import { SessionStorage } from "quasar";

export default function () {
  return {
    myVal: SessionStorage.getItem("myKey") || "Not found",
  };
}
