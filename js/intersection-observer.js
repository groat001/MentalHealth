function reveal() {
  var reveals = document.querySelectorAll(".wrapper");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revealanimation");
    } /*else {
      reveals[i].classList.remove("revealanimation");
    }*/
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
