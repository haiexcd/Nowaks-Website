document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var nav = document.querySelector("nav");
  
    hamburger.addEventListener("click", function () {
      var isOpen = nav.style.display === "block";
      nav.style.display = isOpen ? "none" : "block";
      hamburger.setAttribute("aria-expanded", !isOpen);
    });
  });
  