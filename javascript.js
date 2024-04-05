// Get references to the div elements
const div1 = document.getElementById("contentleft");
const div2 = document.getElementById("contentright");

const gear1 = document.getElementById("gear");
const gear2 = document.getElementById("gear2");
const gear3 = document.getElementById("gear3");
const profilediv = document.getElementById("profiledetails");
const educdiv = document.getElementById("educdiv");

// Add event listeners to the navigation items
document.getElementById("profile").addEventListener("click", moveDivs);

// Define function to move divs
function moveDivs(event) {
    // Move div1 to the left
    div1.style.transform = "translateX(-100%)";
    div2.style.transform = "translateX(100%)";
    // Move div2 to the right
   
    

    gear.style.transform += "rotate(180deg)";
    gear2.style.transform += "rotate(180deg)";
    gear3.style.transform += "rotate(180deg)";
    profilediv.style.display = "block";
    educdiv.style.display = "none";
    educdiv.style.top = "100%";
    document.querySelector('.titlebar h1').textContent = "Profile";
    // Prevent default link behavior
    event.preventDefault();
}
document.getElementById("home").addEventListener("click", moveHome);

// Define function to move divs
function moveHome(event) {
    // Move div1 to the left
    div1.style.transform = "translateX(0)";
    // Move div2 to the right
    div2.style.transform = "translateX(0)";
  
    gear.style.transform += "rotate(-180deg)";
    gear2.style.transform += "rotate(-180deg)";
    gear3.style.transform += "rotate(-180deg)";
    profilediv.style.display = "none";
    educdiv.style.display = "none";
    educdiv.style.top = "100%";
    document.querySelector('.titlebar h1').textContent = "Welcome";

    // Prevent default link behavior
    event.preventDefault();
}

document.getElementById("education").addEventListener("click", moveeduc);

// Define function to move divs
function moveeduc(event) {
    // Move div1 to the left
    div1.style.transform = "translateX(200%)";
    div2.style.transform = "translateX(-200%)";
    // Move div2 to the right
   
   
    educdiv.style.top = "0";
     
    gear.style.transform += "rotate(180deg)";
    gear2.style.transform += "rotate(180deg)";
    gear3.style.transform += "rotate(180deg)";
    profilediv.style.display = "none";
    educdiv.style.display = "block";
    document.querySelector('.titlebar h1').textContent = "Education";
    // Prevent default link behavior
    event.preventDefault();
}
