/********** Menu start ****************/
let menu = document.getElementById("menu");
menu.onclick = function () {
    menu.classList.toggle("change");
}
/********** Menu end ****************/

/********** Log in form start ****************/
let logFormWindow = document.getElementById("log-in-form");
let logIn = document.getElementsByClassName("log-in");
for (let i = 0; i < logIn.length; i++) {
    logIn[i].onclick = function () {
        logFormWindow.classList.add("active");
    }
}

document.getElementById("close").onclick = function () {
    logFormWindow.classList.remove("active");
}

window.onclick = function (event) {
    if (event.target == logFormWindow) {
        logFormWindow.classList.remove("active");
    }
}
/********** Log in form end ****************/

/************** Register Button start***************/
let register = document.getElementsByClassName("register");
for (let i = 0; i < register.length; i++) {
    register[i].onclick = function () {
        window.location.href = "./register.html"
    }
}
/************** Register Button end***************/

/****************** Counter and Scroll up start****************/
let nums = document.querySelectorAll(".info .container .card .text h3");
let section = document.getElementById("info");
let started = false;

function startCounter(element) {
    let goal = element.getAttribute("data-goal");
    let count = setInterval(() => {
        element.textContent++;
        if(element.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

let scroll = document.getElementById("scroll");

window.onscroll = function () {
    if(this.scrollY > 350) {
        scroll.classList.add("active");
    } else {
        scroll.classList.remove("active");
    }
    if(window.scrollY >= (section.offsetTop - window.innerHeight + section.clientHeight)){
        if(!started){
            nums.forEach((num) => startCounter(num));
        }
        started = true;
    }
}

scroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
/************* Counter and Scroll up end **************/

/******************* Slide Show start *******************/
let slideContainer = document.querySelector(".images-slide-show .slides");
let images = document.querySelectorAll(".images-slide-show img");

let counter = 0;

let size = images[0].clientWidth;

slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";

function slideIncrementer () {
    counter++;
    slideContainer.style.transition = "transform 600ms ease-in-out";
    slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";
    slideContainer.addEventListener("transitionend", ()=>{
        if(counter >= 3){
            slideContainer.style.transition = "none";
            counter = 0;
            slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";
        }
    });
    setTimeout(slideIncrementer, 2000);
}

slideIncrementer ();
/******************* Slide Show end *******************/