AOS.init({
  once: true,
  duration: 1200,
})

document.addEventListener('DOMContentLoaded', function () {

  var currentLocation = window.location.href.split("#")[0];

  // ANIMATIONS FOR OPENING AND CLOSING THE OVERLAY NAVIGATION MENU 

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

// SMOOTH ANCHOR ANIMATION, PROVIDED BY JOSEPH SILBER

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });


  // CLOSE OR OPEN MENU WHEN CLICKING ON A BUTTON IN THE OVERLAY

  document.querySelectorAll('a').forEach(button => {
    button.addEventListener("click", function (e) {
      closeMenu()
    });
  })

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

});

