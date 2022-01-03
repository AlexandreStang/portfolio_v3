AOS.init({
  duration: 1200,
})

document.addEventListener('DOMContentLoaded', function () {

  
  var currentLocation = window.location.href.split("#")[0];

  // OPENING AND CLOSING THE OVERLAY NAVIGATION MENU ANIMATIONS

  function openMenu() {
    TweenMax.to(document.getElementById("nav-overlay"), 0.25, {
      opacity: "1", pointerEvents: "auto", onComplete: function () {
        TweenMax.to(document.getElementById("nav-about"), 0.25, { delay: 0.1, opacity: "1" });
        TweenMax.to(document.getElementById("nav-portfolio"), 0.25, { delay: 0.3, opacity: "1" });
        TweenMax.to(document.getElementById("nav-contact"), 0.25, { delay: 0.5, opacity: "1" });
      }
    });

  }

  function closeMenu() {
    TweenMax.to(document.getElementById("nav-overlay"), 0.25, {
      opacity: "0", pointerEvents: "none", onComplete: function () {
        TweenMax.to(document.getElementById("nav-about"), 0.25, { opacity: "0" });
        TweenMax.to(document.getElementById("nav-portfolio"), 0.25, { opacity: "0" });
        TweenMax.to(document.getElementById("nav-contact"), 0.25, { opacity: "0" });
      }
    });

  }

  // CLOSE OR OPEN MENU WHEN CLICKING ON A BUTTON IN THE OVERLAY

  document.getElementById("nav-about").addEventListener("click", function (e) {
    closeMenu()
  });

  document.getElementById("nav-portfolio").addEventListener("click", function (e) {
    closeMenu()
  });

  document.getElementById("nav-contact").addEventListener("click", function (e) {
    closeMenu()
  });

  document.getElementById("open-menu").addEventListener("click", function (e) {
    openMenu()
  });

  document.getElementById("close-menu").addEventListener("click", function (e) {
    closeMenu()
  });

  // CLOSE MENU WHEN RESIZING THE WINDOW

  window.addEventListener("resize", function (event) {
    closeMenu();
  });

  // CLICK ON THE ARROWS

  document.getElementById("arrow-to-about").addEventListener("click", function (e) {
    window.location.replace("index.html#about");
  });

  document.getElementById("arrow-to-portfolio").addEventListener("click", function (e) {
    window.location.replace("index.html#portfolio");
  });

  document.getElementById("arrow-to-contact").addEventListener("click", function (e) {
    window.location.replace("index.html#contact");
  });

  document.getElementById("arrow-to-hero").addEventListener("click", function (e) {
    window.location.replace("index.html#hero");
  });

});

