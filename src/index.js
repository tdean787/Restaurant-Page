import { loadMenu } from "../modules/loadMenu.js";
import { loadHome } from "../modules/loadHome.js";
import { loadContact } from "../modules/loadContact.js";
loadHome();

document.addEventListener("click", (e) => {
  console.log(e.target.innerText);

  let clicked = e.target.innerText;

  if (clicked === "Menu") {
    loadMenu();
  } else if (clicked === "Home") {
    loadHome();
  } else if (clicked === "Contact") {
    loadContact();
  }
});
