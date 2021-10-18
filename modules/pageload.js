import { loadNav } from "../modules/loadNav.js";

function drawHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  let homeDiv = document.createElement("div");
  homeDiv.innerHTML = `
<h1>Home Page</h1>
<p>something else </p>`;
  content.appendChild(loadNav());
  content.appendChild(homeDiv);
}

export function loadHome() {
  drawHome();
}
