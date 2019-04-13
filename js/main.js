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
	[`TRAA Salmonid Monitoring Spring 2012`, `Here's an overview of what happened over a few weekends in the Spring of 2012 when TRAA members and personnel from the Upper 
	Thames River Conservation Authority (UTRCA) waded in for Year 3 of our 5-year Salmonid Tagging and Monitoring Program.`, `Scale samples are taken 
	from every tagged fish for DNA analysis to determine age and genetic classification. While our tags are green, there are lots of different
	 tags on many species of fish out there. It's vital that you report these tag numbers and descriptions to the OMNR whether you keep or release 
	 the fish. Otherwise all this work is compromised.`, `electro`, `sucker`, `swimming`, `Closely ready for stunned rainbow trout to drift back 
	 to them.`, `This hognose sucker is an indicator of good to excellent water quality.`, `Paul Noble measures the girth of a solid rainbow trout.`,
	 `bigbrown`],
	
	[`test number 2`, `dont appear at the top2`, `dont appear at the middle2`, `baseball_shirt`,],
	
	[`test number 3`, `dont appear at the top3`, `dont appear at the middle3`],
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