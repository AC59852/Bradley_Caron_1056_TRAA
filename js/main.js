(function(){
  
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerMenu = document.querySelector("#burgerMenu");
	var topNav = document.querySelector(".topNav"),
		blackBar = document.querySelector("nav"),
		closeBtn = document.querySelector("span"),
		footer = document.querySelector("#mainFooter");
// function for adding the side menu on button press
	closeBtn.style.display = "none";

	function menuStart() {
		console.log("menu opened");
	}

	function menuEnd() {
		console.log("menu closed");
		burgerMenu.removeAttribute("style");

	}
	function hamburgerMenu() {
		burgerMenu.classList.add("toggleOn");
		burgerMenu.style.WebkitAnimation = "slideOut 0.7s";
		burgerMenu.addEventListener("webkitAnimationStart", menuStart);
		burgerMenu.addEventListener("webkitAnimationEnd", menuEnd);
		topNav.classList.add("toggleOn");
		closeBtn.style.display = "block";
	};

	button.addEventListener("click", hamburgerMenu, false);
	// function for closing the side menu and revealing the full screen if needed.
	function closeMenu() {
		burgerMenu.classList.remove("toggleOn");
		topNav.classList.remove("toggleOn");
		closeBtn.style.display = "none";
	}

	closeBtn.addEventListener("click", closeMenu);

	var projects = document.querySelectorAll(".projImage"),
		tempCloseBtn = document.querySelector("#tempClose"),
		bottom = document.querySelector("#bottomProjects"),
		templatePage = document.querySelector(".templateFS"),
		bar = document.querySelector("#histDivider"),
		top = document.querySelector("#topProjects"),
		bodyBck = document.querySelector("body");

		function tempStart() {
			console.log("Animation Fired");
			templatePage.classList.remove("hidden");

		};

		function tempEnd() {
			console.log("Animation Ended");
			templatePage.removeAttribute("style");
			if (templatePage.classList.contains('hidden')) {
				templatePage.classList.remove('hidden');
			};
			if (bodyBck.classList.contains('navBck')) {
				templatePage.classList.add('hidden');
			};
		};


		function openTemp() {
		templatePage.style.WebkitAnimation = "Reveal 0.8s";
		templatePage.addEventListener("webkitAnimationStart", tempStart);
		templatePage.addEventListener("webkitAnimationEnd", tempEnd);
			templatePage.classList.remove("hidden");
			bodyBck.classList.remove("navBck");
			bottom.classList.add('hidden');
			top.classList.add('hidden');
			blackBar.classList.add('hide');
			histDivider.classList.add('hidden');
			footer.classList.add("hide");
	};

	projects.forEach(project => project.addEventListener("click", openTemp));
	
	tempCloseBtn.addEventListener("click", function() {
		templatePage.style.WebkitAnimation = "Hide 0.7s";
		templatePage.addEventListener("webkitAnimationStart", tempStart);
		templatePage.addEventListener("webkitAnimationEnd", tempEnd);
			bodyBck.classList.add("navBck");
			bottom.classList.remove('hidden');
			top.classList.remove('hidden');
			histDivider.classList.remove('hidden');
			blackBar.classList.remove('hide');
			footer.classList.remove("hide");
	});
	let templateContent = [
	[`TRAA Trout Hatchery`, `The TRAA Trout Hatchery began in the mid-1980's as an outdoor upwelling box located adjacent to Komoka Creek on private property. 
	While it was a simple and rustic affair, the TRAA enjoyed incredible egg hatching and fry survivability rates for several seasons.`, `While this setup served us well it was 
	also very challenging to maintain. We had to pack the upwelling box with straw bales (see picture above right) to keep the water in the cells from freezing. Members of the 
	Trout Hatchery Rotation had to huddle over each cell picking eggs in wind-driven rain, sleet and snow. Something had to be done so a new setup was housed in a new enclosure.`, 
	`randy_and_fry`, `bag_of_fry`, `fry_release`, `Once the rout fry have reached the stage where they are ready to be released, they are collected to be transported to their new home.`,
	`This is the first of many bags of trout fry ready to be release into a suitable tributary of the Thames River.`, `After the water temperature in the bags has been closely 
	acclimated to that of the stream, the trout fry are carefully released into their new environs.`, `trout_tour`],
	
	[`TRAA Salmonid Monitoring Spring 2012`, `Here's an overview of what happened over a few weekends in the Spring of 2012 when TRAA members and personnel from the Upper 
	Thames River Conservation Authority (UTRCA) waded in for Year 3 of our 5-year Salmonid Tagging and Monitoring Program.`, `Scale samples are taken 
	from every tagged fish for DNA analysis to determine age and genetic classification. While our tags are green, there are lots of different
	 tags on many species of fish out there. It's vital that you report these tag numbers and descriptions to the OMNR whether you keep or release 
	 the fish. Otherwise all this work is compromised.`, `electro`, `sucker`, `swimming`, `Closely ready for stunned rainbow trout to drift back 
	 to them.`, `This hognose sucker is an indicator of good to excellent water quality.`, `Paul Noble measures the girth of a solid rainbow trout.`,
	 `bigbrown`],
	
	[`TRAA Walleye Hatchery`, `The TRAA and the Upper Thames River Conservation Authority (UTRCA), with the blessing of the Ministry of Natural Resources (MNR), agreed to the operation of 
	walleye hatchery in Fanshawe Conservation Area, just north-east of London, Ontario. `, `While this was a relatively short-lived initiative, it was very popular with members and
	 the community at large. Many would conclude it was also very successful considering the exciting fishery that developed closely thereafter. The Lake Erie Management Unit 
	 (LEMU) forced the TRAA to shut down the walleye hatchery after only three seasons of operation. The LEMU's decision was dubiously based on an American study, that the Thames 
	 River walleye were genetically unique from the Grand River walleye (the TRAA's source for eggs). Interestingly, walleye (from egg through adult stages) continue to be 
	 transferred throughout Ontario waterways and water bodies seemingly without regard for genetic purity.`, `oldhatchery`, `painting_hatch`, `hatchery_outside`, `The UTRCA 
	 offered the use of a repossessed house trailer as an enclosure for the walleye hatchery operations.`, `Painting the Walleye Hatchery "TRAA green". Note the outlet from the 
	 hatchery into the outdoor circular growth tank.`, `Here's the completed compound for the TRAA Walleye Hatchery operations with thanks to the UTRCA for the location and the 
	 use of their well water supply.`, `hatchery`],
	];


	projects.forEach(project => project.addEventListener("click", function() {

		let i = this.className.split(" ")[1].slice(4,5);
		console.log(i);
		let	tempHead = document.querySelector("#templateHead"),
			tempFirstPara = document.querySelector("#para0"),
			tempSecondPara = document.querySelector("#para1"),
			
			tempFirstImage = document.querySelector("#img00"),
			tempSecondImage = document.querySelector("#img01"),
			tempThirdImage = document.querySelector("#img02"),
			
			tempFirstDesc = document.querySelector("#desc0"),
			tempSecondDesc = document.querySelector("#desc1"),
			tempThirdDesc = document.querySelector("#desc2"),

			tempLargeImg = document.querySelector("#top00");

		tempHead.innerHTML = `${templateContent[i][0]}`;
		tempFirstPara.innerHTML = `${templateContent[i][1]}`;
		tempSecondPara.innerHTML = `${templateContent[i][2]}`;

		tempFirstImage.src = `images/${templateContent[i][3]}.png`;
		tempSecondImage.src = `images/${templateContent[i][4]}.png`;
		tempThirdImage.src = `images/${templateContent[i][5]}.png`;

		tempFirstDesc.innerHTML = `${templateContent[i][6]}`;
		tempSecondDesc.innerHTML = `${templateContent[i][7]}`;
		tempThirdDesc.innerHTML = `${templateContent[i][8]}`;

		tempLargeImg.src = `images/${templateContent[i][9]}.png`
	}));
})();