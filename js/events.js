
let lightbox = document.querySelector(".lightbox"),
    projectBox = document.querySelectorAll(".eventWrapper"),
    lightPara = document.querySelector(".lightBoxText"),
    lightImg = document.querySelector(".lightBoxImage");


    // the MDA for the dynamic text in the lightbox
    var	text = [ 
    [`This year we be mixed it up a bit by having the Annual TRAA Paddle & Fish on Sharon Creek Reservoir. 
    A thunderstorm threatened but only gave us a few minutes of rain to cool us off. Fish targeted were largemouth 
    bass, crappie and other panfish as well as some bruiser carp. Many bass were caught with some crappies mixed 
    in to make it interesting. Paul Holmes ended up with the largest fish, a nice smallmouth bass.`],

     [`We were very excited to have a group from the MNRF's Stewardship Youth Rangers Program to do some work on Komoka C
     reek. This program gives groups of 16 or 17 year-olds an opportunity to spend 8 weeks working outdoors on natural 
     resource management projects in their own community.They worked on clearing a section of Komoka Creek upstream of 
     the TRAA trout hatchery.  A major tree had fallen and a lot of the bank went with it.`],

       [`As most members already know, a large tree was blown down during high winds on May 2nd. Ironically, barely a week
        before this happened, we had already removed a couple of dead trees that had been identified as potential hazards 
        to the hatchery. At the time, we thought this tree wasn't a threat as it was well up the hill and well off to one
         side. It unfortunately glanced off of a couple of other trees as it fell.`],

       [`This year we were pleased to welcome visitors from Chipewas of the Thames First Nation, to tour the trout hatchery
       and assist us with the release of more than 40,000 rainbow trout. Everyone was thrilled that the bald eagles with 
       their young ones were keeping an eye on the proceedings at the release site. This was another successful year and 
       those volunteers on the trout hatchery rotation are to be commended.`] ,

       [`he TRAA again had a presence at the London Boat, Fishing and Outdoor Show. A huge "Thank You" goes out to Pat, 
       Dave and all the gang at Angling Sports for giving us space to set up our snazzy new banners Also many thanks to 
       those TRAA members who took the tiime to hang out at the show, chatting to folks about what the TRAA does and 
       generally about fishing in and around London.`],

       [`The rainbow trout fingerlings that we raised from eggs over this past winter were released into Dingman Creek. 
       This year the TRAA welcomed the ECO Club from Louise Arbour French Immersion Public School, to come out and assist 
       successfully releasing in excess of 40,000 rainbow trout.Both the weather and the water conditions were nearly 
       perfect, adding to a fun and rewarding learning experience.`],

       [`The brook trout fingerlings went on the annual road trip throughout rural areas northeast of London to be released
        into several different cold water tributaries. These were brook trout eggs that we harvested with folks from the 
        Upper Thames Conservation Authority (UTRCA) to be raised in the TRAA trout hatchery. Thanks to everyone that has 
        put in their time and effort to collect the brook trout eggs and monitor them in the hatchery.`],

       [`This event has become another TRAA tradition. Members have been helping the Fanshawe Campers Association with the
        Family Fishing Day for many years now.We help the kids rig up, sort out the odd tangle, help measure and release 
        fish; we're just there to generally show them some fishing basics.TRAA members that have come come out to this event 
        in past years find it both fun and rewarding.`],

       [`The brown trout were successfully released with the help of 30 Grade 7/8 students from Oxbow Public School. 
       It was good timing as the rain stopped just as we showed up at the hatchery. Half of the students went for a 
       stream tour lead by Bill Vandewetering and Richard Westelaken while the other half toured the hatchery operation.
       During the stream tour the bald eagle showed up to its nest with a fish in its talons.`],

       [`TRAA members met with another group to do our yearly cleanup of the area around Komoka bridge 
       (some may call it the Speedway bridge). While a good amount of trash was removed from the area, 
       participants commented that there seemed to be significantly less to pick up than in previous years. 
       Let's hope that trend continues! It's always a great way to get some fresh air, light exercise and top 
       up your commitment to "give back."`],

       [`There was hotdogs, burgers and lots of fun going on at this informal get-together. Paul Noble put his 
       barbequing skills to the test supplying a steady stream of hungry customers. Ryan Simard spent most of his 
       time trying to sell tickets for the "Count the Bobbers Contest". Ryan was also the main guy in organizing and
      pulling this whole event together - nice work Ryan!Your ticket gave you a chance at a $100 gift certificate!`],

       [`Hatchery Stairs The first and largest phase of the stairway system down to the hatchery has been completed. 
       This turns a rugged and often unsafe trail into "a walk in the park". It was built with folks of all ages in 
       mind and with a nod to easier snow removal because after all, the trout are in the hatchery throughout the dead
        of winter.`],

       [`We held our 3rd Annual Paddle & Fish July 18th. Members met at the Tim Horton's on Veteran's Memorial Parkway 
       and then left from there to the put-in at the Veteran's Memorial Parkway bridge. From there we paddled and fished
        our way down to Pottersburg Park. Launch The access point was washed out from the recent rains so we had to 
        "portage" from the road.`],

       [`This event has become another TRAA tradition. Members have been helping the Fanshawe Campers Association with 
       the Family Fishing Day for many years now. We help the kids rig up, sort out the odd tangle and generally show 
       them some fishing basics. The TRAA members that come out to this event find it both fun and rewarding. Left: 
       Adam Bengen and Paul Noble try to help a young family on the fishing dock.`],

       [`As you are likely aware, Springbank Dam has been back in the news with rookie mayor Matt Brown attempting 
       to gain support for the misguided repair of this monument to environmental and fiscal disaster. If you are a 
       fan of free-flowing rivers for the health of our aquatic ecosystems and your community and you missed this 
       screening, you'll want to check out this moving piece of cinema on Netflex or anywhere else you can find it.`],

       [`The rainbow trout fry were released into Dingman Creek with the help of a Grade 4 class from Princess Elizabeth 
       Public School. Special thanks to TRAA members Jenn Stewart, Adam Bengen, Bill Vandewetering and Rob Huber for 
       taking the time to help out with the this event. Rainbow Release 1 The group of 21 students was split with half 
       going on an "eco-walk" along Komoka Creek with TRAA member Adam Bengen.`],

       [`Here is the tag sewn and ready to be trimmed. Scale sample A scale sample is then carefully taken for possible 
       DNA analysis. Big Male Here's a beefy male ready for release after tagging. Big Brown Lots of resident brown trout,
        darters, sticklebacks, stonerollers, hognose & white suckers as well as other fish species speak to the diversity
        of this unique stream.`],

       [`Over the past six months or so, a small but dedicated and determined group of TRAA members put a lot of work 
       into making your TRAA trout hatchery experience even better! None of this could have been accomplished without 
       grants from the MNR's CFWIP program and the OFAH through their CHP program. Roofing Hatchery July 2014 We found 
       that the life of our asphalt shingles was shortened by the forested location of the hatchery.`],

       [`This spring's hatch of rainbow trout was incredibly successful with low mortality resulting in a phenomenal total
       of over 40,000 fry ready for release day on Saturday June 21, 2014. TRAA members and guests met at the Country Hearth
       Restaurant in Komoka and car-pooled to the TRAA hatchery site to help out moving the fry from the hatchery to the TRAA
        transfer tank. The rainbow trout fry were released into Dingman Creek.`],

    [`A few TRAA members cleared a number of fallen trees and other blockages on October 13th. Dan Shinkelshoek made a
     video of the proceedings and it's worth a look so click on the picture to view. If you have further questions about
      TRAA stream habitat projects and events, please come out to the TRAA General Meeting on Wednesday, November 14th 
      or contact us.`]
    	];



    projectBox.forEach(box => {
      box.addEventListener("click", function(e) {

      	// this is checking for the class names of the clicked event and taking the second one
      	let i = this.className.split(" ")[1],
        lbImage = this.className.split(" ")[2];


        lightImg.src = `images/${lbImage}.png`;

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