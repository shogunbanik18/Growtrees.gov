let hamburger =document.getElementById('hamburger');
let times =document.getElementById('times');
let mobilenav =document.getElementById('mobile-nav');

hamburger.addEventListener('click',function(){
 mobilenav.classList.add('open');
});

times.addEventListener('click',function(){
 mobilenav.classList.remove('open');
});