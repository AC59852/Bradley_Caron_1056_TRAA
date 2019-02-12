var dot1 = document.querySelector("#dot1");

dot1.addEventListener("click", dot1Show)
function dot1Show() {
	document.getElementById("topSlide1").classList.add("visible");
  document.getElementById("topSlide2").classList.remove("visible");
  document.getElementById("topSlide3").classList.remove("visible");
  document.getElementById("topSlide4").classList.remove("visible");
}

dot2.addEventListener("click", dot2Show)
function dot2Show() {
	document.getElementById("topSlide1").classList.add("hidden");
	document.getElementById("topSlide1").classList.remove("visible");
  document.getElementById("topSlide2").classList.add("visible");
  document.getElementById("topSlide3").classList.remove("visible");
  document.getElementById("topSlide4").classList.remove("visible");
}

dot3.addEventListener("click", dot3Show)
function dot3Show() {
	document.getElementById("topSlide1").classList.add("hidden");
	document.getElementById("topSlide1").classList.remove("visible");
  document.getElementById("topSlide2").classList.remove("visible");
  document.getElementById("topSlide3").classList.add("visible");
  document.getElementById("topSlide4").classList.remove("visible");
}

dot4.addEventListener("click", dot4Show)
function dot4Show() {
	document.getElementById("topSlide1").classList.add("hidden");
	document.getElementById("topSlide1").classList.remove("visible");
  document.getElementById("topSlide2").classList.remove("visible");
  document.getElementById("topSlide3").classList.remove("visible");
  document.getElementById("topSlide4").classList.add("visible");
}

console.log('Hey profs, our JS is linked up!');

/* We used the W3C School method of linking our carousel. We used the concepts of greater and less than, as well as the onclick
as we could not get it working in the JS, we just linked it in html. All images and containers are our own, and
only used the template code from W3C as the slide show structure*/