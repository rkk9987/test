var hamBurgerMenu= document.getElementsByClassName('hamBurgerMenu')[0];
var navBarBox = document.getElementsByClassName('navBarBox')[0];
var downContainer= document.getElementsByClassName('navDownContainer')[0];
 var a=0;
hamBurgerMenu.addEventListener('click',()=>{
    if(a==0){
        downContainer.style.display='flex !important';
    navBarBox.style.height='317px';
    downContainer.style.display='flex'
    a=2;
    }
    else{
        navBarBox.style.height='60px';
        downContainer.style.display='none';
        navBarBox.style.overflowY='hidden';
        a=0;
    }
})
let g=1;
document.getElementsByClassName('myAccountTitle')[0].addEventListener('click',()=>{

    if(g==1){
    document.getElementsByClassName('myAccountDropDown')[0].style.display='block';
    // document.getElementsByTagName('body')[0].style.overflowY='hidden'
    g=2;
    }
    else{
        document.getElementsByClassName('myAccountDropDown')[0].style.display='none';
        document.getElementsByTagName('body')[0].style.overflowY='auto';
        g=1;
    }
})
document.getElementsByClassName('myAccountTitle')[1].addEventListener('click',()=>{

    if(g==1){
        navBarBox.style.height='60px';
        downContainer.style.display='none';
        navBarBox.style.overflowY='hidden';
    document.getElementsByClassName('myAccountDropDown')[0].style.display='block';
    // document.getElementsByTagName('body')[0].style.overflowY='hidden'
    g=2;
    }
    else{
       
        document.getElementsByClassName('myAccountDropDown')[0].style.display='none';
        document.getElementsByTagName('body')[0].style.overflowY='auto';

        g=1;
    }
})
document.getElementsByClassName('cart')[0].addEventListener('click',()=>{
    location.href="cart/cartdesign.html";
})
document.getElementsByClassName('cart')[1].addEventListener('click',()=>{
    location.href="cart/cartdesign.html";
})

document.getElementsByClassName('signInButton')[0].addEventListener('click',()=>{
    location.href="sign in/signin.html";
})

document.getElementsByClassName('registerButton')[0].addEventListener('click',()=>{
    location.href="sign up/signup.html";
})