function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var arrow = document.querySelectorAll(".arrow");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      if (i == 0) {
        arrow[i].classList.add("fade");
      }
    } else {
      reveals[i].classList.remove("active");
      if (i == 0) {
        arrow[i].classList.remove("fade");
      }
    }
  }
}
window.addEventListener("scroll", reveal);  

  
  
  