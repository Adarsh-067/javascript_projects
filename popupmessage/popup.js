let btn = document.querySelector("#btn1");
let button = document.querySelector("#btn");
let container = document.querySelector(".container");
btn.addEventListener('click',()=>{
    container.classList.add("container1")
})

button.addEventListener('click',()=>{
  container.style.visibility = "hidden";
})
