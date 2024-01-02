let links = document.getElementById("links");
let hero = document.getElementById("hero");
let footer = document.getElementById("footer");
let projects = document.getElementById("projects");
let isClick = 1;
function togglemenu() {
  if (isClick % 2 != 0) {
    links.style.display = "block";
    hero.style.filter = "blur(3px)";
    footer.style.filter = "blur(3px)";
    projects.style.filter = "blur(3px)";
  } else {
    links.style.display = "none";
    hero.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
    projects.style.filter = "blur(0px)";
  }
  isClick += 1;
}
