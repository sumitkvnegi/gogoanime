const hamburger= document.querySelector('.hamburger');
const navlinks= document.querySelector('.nav-links');


hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
})
const slime=document.querySelector('.slime');
const video=document.querySelector('.videoslime');
slime.addEventListener('click',()=>{
video.classList.toggle('open');
})
const demon=document.querySelector('.demon');
const video2=document.querySelector('.videodemon');
demon.addEventListener('click',()=>{
video2.classList.toggle('open');
})