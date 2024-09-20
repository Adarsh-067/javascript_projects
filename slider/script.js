let lbtn = document.querySelector("#lbtn");
let rbtn = document.querySelector("#rbtn");
let slides = document.querySelectorAll(".slide");
let count = 0;
let i = 0;

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})

lbtn.style.visibility = "hidden";
lbtn.addEventListener('click',()=>{
    count--;
    if (count <= 0) {
        lbtn.style.visibility = "hidden";
    }
    slideImage();
        rbtn.style.visibility = "visible"
        i--;
})

rbtn.addEventListener('click',()=>{
    count++;
    noRepeat();
    i++;
    if (count > 0) {
        lbtn.style.visibility = "visible";
    }
})

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count*100}%)`
    })
}

const noRepeat = () =>{
    if (i != slides.length-1) {
        slideImage();
    }else{
        rbtn.style.visibility = "hidden";
    }
}
