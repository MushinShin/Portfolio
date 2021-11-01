const sideBar = document.getElementById("sidebar");
const showMenu = document.getElementById("nav-toggle");

const handleDisplayButton = () => {
  if (sideBar && showMenu) {
    showMenu.addEventListener("click", () => {
      sideBar.classList.toggle("show");
      showMenu.classList.toggle("rotate");
    });
  }
};

showMenu.onclick = handleDisplayButton;
