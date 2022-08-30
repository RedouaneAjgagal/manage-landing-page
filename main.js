// Mobile navigation trigger
const burgerMenu = document.querySelector(".trigger");
const burgerLinks = document.querySelector(".navbarLinks");
const triggerImg = document.querySelector(".triggerImg");
burgerMenu.addEventListener("click", () => {
    burgerLinks.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    if (burgerLinks.classList.contains("open")) {
        triggerImg.setAttribute("src", "./images/icon-close.svg");
        burgerMenu.setAttribute("aria-expanded", "true");
    } else {
        triggerImg.setAttribute("src", "./images/icon-hamburger.svg");
        burgerMenu.setAttribute("aria-expanded", "false");
    }
})
// Remove open menu if you click on any link
const navbarLink = document.querySelectorAll(".navbarLink");
navbarLink.forEach(link => {
    link.addEventListener("click", () => {
        burgerLinks.classList.remove("open");
        document.body.classList.remove("no-scroll");
        triggerImg.setAttribute("src", "./images/icon-hamburger.svg");
        burgerMenu.setAttribute("aria-expanded", "false");
    })
})

// Email validation
const emailValid = document.getElementById("emailValidation");
const emailInp = document.getElementById("email");
const errMsg = document.querySelector(".errMsg");
emailValid.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let emailReq = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (emailInp.value === '' || emailInp.value === null) {
        errMsg.innerHTML = "Email can't be Blank.";
    } else if (!emailReq.test(emailInp.value)) {
        emailInp.style.color = "#f44336";
        errMsg.innerHTML = "Please insert a valid Email.";
    } else {
        emailInp.style.color = "";
        errMsg.innerHTML = "";
    }
})

// Slider - SwiperJS
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
   delay: 4000,
 },
  
  breakpoints: {
    // when window width is >= 1034px
    1035: {
        slidesPerView: 3,
        allowTouchMove: false,
    },
    // when window width is >= 867px
    868: {
      slidesPerView: 2
    }
},

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

