let showNav = false;

function toggleNav() {
  showNav = true;
  let nav = document.querySelector(".nav-menu-list");
  if (showNav) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
