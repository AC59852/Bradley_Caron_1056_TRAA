
let lightbox = document.querySelector(".lightbox"),
    projectBox = document.querySelectorAll(".eventWrapper"),
    lightPara = document.querySelector(".lightBoxText"),
    lightImg = document.querySelector(".lightBoxImage");

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
      	let i = this.className.split(" ")[1];

      	lightPara.textContent = `${text[i]}`
        lightbox.classList.add("showLightBox");
      });
    });

    function closeLightBox() {
      lightbox.classList.remove("showLightBox");
    }

    button.addEventListener("click", function() {
      burgerMenu.classList.remove("toggleOn");
        topNav.classList.remove("toggleOn");
          blackBar.classList.add("blackBar");
        });
  // function for closing the side menu and revealing the full screen if needed.


    lightbox.addEventListener("click", closeLightBox);