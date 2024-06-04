import { setupCounter } from "./counter";
import "./style.css";

window.onload = () => {
  const counterBtn = document.getElementById("counterBtn");
  if (!counterBtn) {
    throw new Error("App element not found");
  }
  setupCounter(counterBtn as HTMLButtonElement);
};
