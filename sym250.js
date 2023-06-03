const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function slider(){
    idx++;

    if (idx > img.length -1){
        idx= 0;
    }
    
    imgs.style.transform = `translateX(${-idx * 700}px)`;
}
setInterval(slider,2500);
