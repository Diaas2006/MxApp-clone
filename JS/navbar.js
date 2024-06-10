const navbar = document.querySelector('nav')
window.addEventListener("scroll", function(){
    const scroll = window.scrollY
    if(scroll > 150){
        navbar.classList.add('navbar-fixed');
    }
    else{
        navbar.classList.remove('navbar-fixed');
    }
})