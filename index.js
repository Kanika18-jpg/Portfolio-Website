document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Frontend Developer', 'c# Developer'],
        typeSpeed: 50,
    });
 
    const navLinks = document.querySelectorAll('nav a');

    // Add a click event listener to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link (scrolling)
            event.preventDefault();

            // Get the target section's id from the link's href attribute
            const targetId = this.getAttribute('href').substring(1); // Remove the "#" symbol

            // Scroll to the target section smoothly
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                

   
            }
        });
    });


    const progText = document.querySelectorAll(".progText");
    const progress = document.querySelectorAll(".progress");
    const progContainer = document.querySelector(".container");
    let bol = false;

    window.addEventListener("scroll" , function(){
        if(pageYOffset > progContainer.offsetTop - 600 && bol==false){
                for(let i=0; i< progText.length; i++){
                    progText[i].innerText =0;
                    count =0;

                    progress[i].computedStyleMap.bottom = "100%";

                    progress[i].style.bottom = progText[i].dataset.count -100 + "%";
                    function updateCount(){
                        target = parseInt(progText[i].dataset.count,10);
            
                        if(count < target){
                            count++;
                            progText[i].innerText = count;
                            setTimeout(updateCount, 50);
            
                        }else{
            
                            progText[i].innerText = target + "%";
                        }
                    }
                     updateCount();
                     bol=true;
                }
        }
    });



//Get a reference to the "Skills" link
const skillsLink = document.querySelector('a[href="#skills"]');

// Get a reference to the "skill-left" section
const skillLeft = document.getElementById('skill-left');
//const skillRight = document.getElementById('skill-right');

// Define the updated content for the "skill-left" section
const updatedSkillLeftContent = `
    <h3> Technical Skills</h3>
    <div class="skill-bar">
        <div class="infor">
            <p>HTML</p>
            <p>72%</p>
        </div>
        <div class="bar">
            <span class="html"></span>
        </div>
    </div>
    <div class="bar">
                      <span class="html"></span>
                     </div>
                    </div>
                     <div class="skill-bar">
                     <div class="infor">
                         <p>CSS</p>
                         <p>62%</p>
                     </div>
                     <div class="bar">
                      <span class="css"></span>
                     </div>
                    </div>
                     <div class="skill-bar">
                     <div class="infor">
                         <p>JAVASCRIPT</p>
                         <p>52%</p>
                     </div>
                     <div class="bar">
                       <span class="js"></span>
                     </div>
                    </div>
                     <div class="skill-bar">
                     <div class="infor">
                         <p>JAVA</p>
                         <p>42%</p>
                     </div>
                     <div class="bar">
                       <span class="java"></span>
                     </div>
                    </div>
                     <div class="skill-bar">
                     <div class="infor">
                         <p>REACTJS</p>
                         <p>32%</p>
                     </div>
                     <div class="bar">
                     <span class="reactjs"></span>
                     </div>
                    </div>
                     <div class="skill-bar">
                     <div class="infor">
                     <p>C#</p>
                     <p>22%</p>
                     </div>
                     <div class="bar">
                     <span class="c-sharp"></span>
                     </div>
                     </div>
                     
                     `;
                     
                                 
                    
// Add a click event listener to the "Skills" link
skillsLink.addEventListener('click', function (event) {
   
    event.preventDefault();

    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
    
    skillLeft.innerHTML = updatedSkillLeftContent;
   
});










});





