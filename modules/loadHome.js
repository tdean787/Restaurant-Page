import { loadNav } from "../modules/loadNav.js";

export function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  let container = document.createElement("div");
  container.innerHTML = `
<h1>Home Page</h1>
<p> This is the home page about text </p>`;

  content.appendChild(loadNav());
  content.appendChild(container);
}
