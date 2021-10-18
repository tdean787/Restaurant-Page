export function loadNav() {
  let nav = document.createElement("nav");
  nav.innerHTML = `
    <button> Home </button>
    <button> Contact </button>
    <button> Menu </button>
    `;

  return nav;
}
