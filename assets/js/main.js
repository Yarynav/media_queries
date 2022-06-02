const menuOptions = document.getElementById("menu-options");

function openMenu() {
  if (menuOptions.style.display === "flex") {
    menuOptions.style.display = "none";
  } else {
    menuOptions.style.display = "flex";
    menuOptions.style.flexDirection = "column";
  }
}

function selectMenu() {
  if (window.innerWidth < 577) {
    menuOptions.style.display = "none";
  }
}

function resizeWindow() {
  if (window.innerWidth > 576) {
    menuOptions.style.display = "flex";
    menuOptions.style.flexDirection = "column";
  } else {
    menuOptions.style.display = "none";
  }
}

// Agraga una función que se ejecutara cada vez que se cambia el ancho o el alto de la ventana
// En este caso ejecutamos la función "resizeWindow" creada arriba
window.addEventListener("resize", resizeWindow);
