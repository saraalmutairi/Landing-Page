/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const sections = document.querySelectorAll('section');
const navList = document.getElementById("navbar__list");

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build menu 

function buildNav(){
  for (let section of sections) {
     const navlistElement=`<li><a id = "${section.id}_link" class = "menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
      
      navList.insertAdjacentHTML('beforeend', navlistElement)
};
} 
buildNav();


// hide navBar
let move = false;
window.addEventListener('mousemove',()=>{ navList.style.display = 'block';
setTimeout(()=>{
    if(!move){navList.style.display = 'none'; }},5000 )
  }
  );



//remove highlate to navBar and section 
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  let link = document.querySelector(`#${section.id}_link`);
  link.classList.remove('active');
}

// add highlate to navBar and section 
const addActive = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
      let link = document.querySelector(`#${section.id}_link`);
      link.classList.add('active');
  };
}

// active section

const activeScection = () => {
  sections.forEach(section => {
      const elementOffset = section.getBoundingClientRect().top;

      inviewport = () => elementOffset < 150 && elementOffset >= -150;
      removeActive(section);
      addActive(inviewport(),section);
  });
}
window.addEventListener('scroll', activeScection)


// Scroll to section on link click

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'end', behavior: 'smooth'
      });
  });
});