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

/* We used originally used the W3C Schools method of creating a carousel, by using greater than and less than
to add or subtract the next image, and used an onclick inline html to move the pictures along.
In the end, we used Austin's SVG code for click event listeners and gave them to each dot,
Applying a class for display block to the wanted photo, and hiding all others. It's repetetive,
but simple.*/