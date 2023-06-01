const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carroussel(){
    idx++;

    if (idx > img.length -1){
        idx= 0;
    }
    
    imgs.style.transform = `translateX(${-idx * 700}px)`;
}
setInterval(carroussel,2500);