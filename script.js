  setTimeout(() => {
    document.getElementById("leftImg").classList.add("sway");
    document.getElementById("rightImg").classList.add("sway");
  }, 1000);

  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  
  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation(); 
    navMenu.classList.toggle("hidden");
  });


  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && event.target !== menuIcon) {
      navMenu.classList.add("hidden");
    }
  });