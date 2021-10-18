import { loadNav } from "../modules/loadNav.js";

export function loadContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  let container = document.createElement("div");

  container.innerHTML = `
<h1>Contact Us</h1>
<p> The contact information is below </p>`;
  content.appendChild(loadNav());
  content.appendChild(container);
}
