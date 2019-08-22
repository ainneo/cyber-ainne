// syntax: element = document()

const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const spanEl = document.querySelector(".span");
const spanEl1 = document.querySelector(".span1");
const spanEl2 = document.querySelector(".span2");



//classlist is a property and .toggle is a method
// element.property.method("classname")

//element.addEventListener("event", function)
function toggleNav(){
	navTriggerEl.addEventListener("click", function(){
    navEl.classList.toggle("open");
		spanEl.classList.toggle("color");
		spanEl1.classList.toggle("color");
		spanEl2.classList.toggle("color");
		})
}
toggleNav();
