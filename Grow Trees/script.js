// EXTERNAL JAVASCRIPT LINKED 

let hamberger = document.querySelector('.hamberger');
let No = document.querySelector('.No');
let mobileNav = document.querySelector('.mobile-nav')

hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
});

No.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
