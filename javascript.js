// Get references to the div elements
const div1 = document.getElementById("contentleft");
const div2 = document.getElementById("contentright");

const gear1 = document.getElementById("gear");
const gear2 = document.getElementById("gear2");
const gear3 = document.getElementById("gear3");
const profilediv = document.getElementById("profiledetails");
const educdiv = document.getElementById("educdiv");
const expdiv = document.getElementById("exp");
const projdiv = document.getElementById("proj");
const condiv = document.getElementById("cont");


const CollegeText = document.getElementById("CollegeText");
const CollegeText2 = document.getElementById("CollegeText2");


const SHSText = document.getElementById("SHSText");
const SHSText2 = document.getElementById("SHSText2");





document.getElementById("home").addEventListener("click", moveHome);

// Define function to move divs
function moveHome(event) {
    
    document.querySelector('.titlebar h1').textContent = "Welcome";
    // Move div1 to the left
    div1.style.transform = "translateX(0)";
    // Move div2 to the right
    div2.style.transform = "translateX(0)";
  
    gear.style.transform += "rotate(-180deg)";
    gear2.style.transform += "rotate(-180deg)";
    gear3.style.transform += "rotate(-180deg)";

    profilediv.style.display = "none";
    educdiv.style.display = "none";
    expdiv.style.display = "none";
    projdiv.style.display ="none";
    condiv.style.display = "none";
    
  

    // Prevent default link behavior
    event.preventDefault();
}


// Add event listeners to the navigation items
document.getElementById("profile").addEventListener("click", moveDivs);

// Define function to move divs
function moveDivs(event) {
    // Close existing content with a delay
    
    profilediv.style.display = "none";
    educdiv.style.display = "none";
    expdiv.style.display = "none";
    projdiv.style.display ="none";
    condiv.style.display = "none";
    
    document.querySelector('.titlebar h1').textContent = "Profile";
    setTimeout(function() {
        // Move div1 and div2 to the sides
        div1.style.transform = "translateX(0)";
        div2.style.transform = "translateX(0)";
        gear.style.transform += "rotate(-180deg)";
            gear2.style.transform += "rotate(-180deg)";
            gear3.style.transform += "rotate(-180deg)";
         
        // Open "Profile" content after a delay
        setTimeout(function() {
            profilediv.style.display = "block";
            div1.style.transform = "translateX(-100%)";
            div2.style.transform = "translateX(100%)";
            gear.style.transform += "rotate(180deg)";
            gear2.style.transform += "rotate(180deg)";
            gear3.style.transform += "rotate(180deg)";
      
            
   
        }, 450); // Adjust delay time (in milliseconds) as needed
    }, 50); // Adjust delay time (in milliseconds) as needed

    // Prevent default link behavior
    event.preventDefault();
}



document.getElementById("education").addEventListener("click", moveeduc);

// Define function to move divs
function moveeduc(event) {
    // Close existing content with a delay
    profilediv.style.display = "none";
    expdiv.style.display = "none";
    projdiv.style.display ="none";
    condiv.style.display = "none";
    
    setTimeout(function() {
        document.querySelector('.titlebar h1').textContent = "Education";
        // Move div1 and div2 to the sides
        div1.style.transform = "translateX(0)";
        div2.style.transform = "translateX(0)";
        gear.style.transform += "rotate(-180deg)";
            gear2.style.transform += "rotate(-180deg)";
            gear3.style.transform += "rotate(-180deg)";
       
        // Open "Education" content after a delay
        setTimeout(function() {
            educdiv.style.display = "block";
            div1.style.transform = "translateX(-100%)";
            div2.style.transform = "translateX(100%)";
            gear.style.transform += "rotate(180deg)";
            gear2.style.transform += "rotate(180deg)";
            gear3.style.transform += "rotate(180deg)";
           
           
        }, 450); // Adjust delay time (in milliseconds) as needed
    }, 50); // Adjust delay time (in milliseconds) as needed

    // Prevent default link behavior
    event.preventDefault();
}

document.getElementById("Buttonlogo").addEventListener("click", College);

// Define function to move divs
function College(event) {
    CollegeText2.style.display = "block";
    CollegeText.style.display = "none";
    // Prevent default link behavior
    event.preventDefault();
}

document.getElementById("Buttonlogo2").addEventListener("click", SHS);

const Buttonlogo2 = document.getElementById("Buttonlogo2");

Buttonlogo2.addEventListener('click', function(){
    SHSText2.style.display("block");
    Buttonlogo2.classList.add('hidden');
});

// Define function to move divs
function SHS(event) {
    SHSText2.style.display = "block";
    SHSText.style.display = "none";
    // Prevent default link behavior
    event.preventDefault();
}









document.getElementById("experience").addEventListener("click", moveexp);

// Define function to move divs
function moveexp(event) {
    // Close existing content with a delay
    profilediv.style.display = "none";
    educdiv.style.display = "none";
    condiv.style.display = "none";
    projdiv.style.display ="none";
    
    setTimeout(function() {
        document.querySelector('.titlebar h1').textContent = "Experience";
        // Move div1 and div2 to the sides
        div1.style.transform = "translateX(0)";
        div2.style.transform = "translateX(0)";
        gear.style.transform += "rotate(-180deg)";
            gear2.style.transform += "rotate(-180deg)";
            gear3.style.transform += "rotate(-180deg)";
          
    
        // Open "Education" content after a delay
        setTimeout(function() {
            expdiv.style.display = "flex";
           
            div1.style.transform = "translateX(-100%)";
            div2.style.transform = "translateX(100%)";
            gear.style.transform += "rotate(180deg)";
            gear2.style.transform += "rotate(180deg)";
            gear3.style.transform += "rotate(180deg)";
           
           
        }, 450); // Adjust delay time (in milliseconds) as needed
    }, 50); // Adjust delay time (in milliseconds) as needed

    // Prevent default link behavior
    event.preventDefault();
}


document.getElementById("projects").addEventListener("click", moveproj);

// Define function to move divs
function moveproj(event) {
    // Close existing content with a delay
    profilediv.style.display = "none";
    educdiv.style.display = "none";
    expdiv.style.display = "none";
    condiv.style.display = "none";
    
    
    setTimeout(function() {
        document.querySelector('.titlebar h1').textContent = "Projects";
        // Move div1 and div2 to the sides
        div1.style.transform = "translateX(0)";
        div2.style.transform = "translateX(0)";
        gear.style.transform += "rotate(-180deg)";
            gear2.style.transform += "rotate(-180deg)";
            gear3.style.transform += "rotate(-180deg)";
          
        
    
        // Open "Education" content after a delay
        setTimeout(function() {
            projdiv.style.display = "block";
            div1.style.transform = "translateX(-100%)";
            div2.style.transform = "translateX(100%)";
            gear.style.transform += "rotate(180deg)";
            gear2.style.transform += "rotate(180deg)";
            gear3.style.transform += "rotate(180deg)";
           
           
        }, 450); // Adjust delay time (in milliseconds) as needed
    }, 50); // Adjust delay time (in milliseconds) as needed

    // Prevent default link behavior
    event.preventDefault();
}

document.getElementById("contacts").addEventListener("click", moveCon);

// Define function to move divs
function moveCon(event) {
    // Close existing content with a delay
    profilediv.style.display = "none";
    educdiv.style.display = "none";
    expdiv.style.display = "none";
    projdiv.style.display ="none";
    
    
    
    setTimeout(function() {
        document.querySelector('.titlebar h1').textContent = "Contacts";
        // Move div1 and div2 to the sides
        div1.style.transform = "translateX(0)";
        div2.style.transform = "translateX(0)";
        gear.style.transform += "rotate(-180deg)";
            gear2.style.transform += "rotate(-180deg)";
            gear3.style.transform += "rotate(-180deg)";
          
        
        setTimeout(function() {
            condiv.style.display = "block";
            div1.style.transform = "translateX(-100%)";
            div2.style.transform = "translateX(100%)";
            gear.style.transform += "rotate(180deg)";
            gear2.style.transform += "rotate(180deg)";
            gear3.style.transform += "rotate(180deg)";
           
           
        }, 450); // Adjust delay time (in milliseconds) as needed
    }, 50); // Adjust delay time (in milliseconds) as needed

    // Prevent default link behavior
    event.preventDefault();
    
    $(document).ready(function() {
        $('#exp').click(function() {
            $('.experiencediv').toggleClass('flip');
        });
    });
}