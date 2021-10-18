import { loadNav } from "../modules/loadNav.js";

export function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  let container = document.createElement("div");

  container.innerHTML = `
<h1>Restaurant Menu</h1>
<p>something else </p>`;
  content.appendChild(loadNav());
  content.appendChild(container);
}