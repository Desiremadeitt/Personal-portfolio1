var action = document.querySelector('.action');
var mobileMenu = document.querySelector('.mobile_menu');
var hamburger = document.querySelector('.hamburger');
var cancel = document.querySelector('.cancel');
var button1 =document.querySelector('.project_btn1');
var button2 =document.querySelector('.project_btn2')
action.addEventListener("click" , function(){
    mobileMenu.classList.toggle('reset'); 

    if(mobileMenu.classList.contains('reset')){
    hamburger.Style.display = 'none';
    cancel.style.display= 'block'
    }
    else{
        hamburger.style.display = 'block',
        cancel.style.display ='none'
    }
})

button1.addEventListener("click", function(){
    const link = document.createElement('a');
  link.href = ''
})
button2.addEventListener("click", function(){
    const link = document.createElement('a');
  link.href = 'https://w-homepage-frontendmentor.vercel.app/'
})