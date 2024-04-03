let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll =() =>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
   loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    },
    1024: {
        slidesPerView:3,
    },
    },
});
document.getElementsByClassName("swiper")[0].addEventListener('mouseover',(event)=>{
    console.log(event)
   document.querySelector('.swiper').addClass('disabled');
   document.querySelector('.swiper-pagination').addClass('disabled');
})
var swiper1 = new Swiper(".review-slider", {
   loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    },
    1024: {
        slidesPerView:3,
    },
    },
});