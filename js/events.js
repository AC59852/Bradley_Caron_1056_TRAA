
let lightbox = document.querySelector(".lightbox"),
    projectBox = document.querySelectorAll(".eventWrapper"),
    lightPara = document.querySelector(".lightBoxText"),
    lightImg = document.querySelector(".lightBoxImage");


    // the MDA for the dynamic text in the lightbox
    var	text = [ 
    [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi debitis nostrum, 
    nemo illo magnam id voluptates eum dolor accusamus perspiciatis velit in ipsum fugiat culpa quia modi, inventore facilis!`],

     [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium fugit minus asperiores tenetur, 
    	ab ipsam suscipit voluptatibus officiis ea iure at molestias iusto ut sunt maxime hic labore rerum.`],

    [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium fugit minus asperiores tenetur, 
    	ab ipsam suscipit voluptatibus officiis ea iure at molestias iusto ut.`]
    	];

    projectBox.forEach(box => {
      box.addEventListener("click", function(e) {

      	// this is checking for the class names of the clicked event and taking the second one
      	let i = this.className.split(" ")[1];

      	// this is adding the text from the MDA that correlates to the class name found from i
      	// it's also adding the showLightBox class from CSS 
      	lightPara.textContent = `${text[i]}`
        lightbox.classList.add("showLightBox");
      });
    });

    function closeLightBox() {
    // this is removing showLightBox from the class list when clicking anywhere in the lightbox
      lightbox.classList.remove("showLightBox");
    }

    // function for closing the side menu and revealing the full screen if needed.
    button.addEventListener("click", function() {
      burgerMenu.classList.remove("toggleOn");
        topNav.classList.remove("toggleOn");
          blackBar.classList.add("blackBar");
        });


    lightbox.addEventListener("click", closeLightBox);