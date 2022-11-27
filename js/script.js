// let click = document.querySelector(".navbar-toggler");
// let list = document.querySelector(".lit");
// let topBar = document.querySelector(".top-bar");
// let middel = document.querySelector(".top-bar");
// let bottom = document.querySelector(".top-bar");

// click.onclick = function () {
//     list.classList.toggle("to");
// }




let iconMenu = document.getElementById("icon-menu");
let list = document.getElementById("list");
let closeIcone = document.getElementById("close");
let line_icone = document.getElementById("line_icone");
if(line_icone) {
    line_icone.addEventListener('click', () => {
        list.classList.add("active");
        closeIcone.classList.add("active");
        line_icone.style.display=  "none";
        closeIcone.style.display=  "block";
    });
};
if(closeIcone) {
    closeIcone.addEventListener("click", () => {
        list.classList.remove("active");
        line_icone.style.display=  "block";
        closeIcone.style.display=  "none";
    })
}


// Initialize Swiper 

var swiper = new Swiper(".mainsiwper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



//   anther swiper 
  var swiper = new Swiper(".partners-Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });