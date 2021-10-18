export function loadNav() {
  let nav = document.createElement("nav");
  nav.innerHTML = `
    <a href="#">Home</a>
    <a href="#">Contact</a>
    <a href="#">Menu</a>
    `;

  return nav;
}
