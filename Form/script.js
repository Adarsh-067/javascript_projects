let formcontainer = document.querySelector(".formcnt");
let button = document.querySelector("#btn1");
let container = document.querySelector(".container");

let formBtn = document.querySelector("#btn2");

formBtn.addEventListener("click", () => {
  let data = {
    fullName: information(1),
    mobile: information(2),
    email: information(3),
    per: information(4),
    date: information(5),
  };

  storage("Name", data.fullName);
  storage("Mobile", data.mobile);
  storage("email", data.email);
  storage("percentage", data.per);
  storage("date of birth", data.date);

  formcontainer.classList.add("formcnt1");
  container.classList.add("container1");
});

function storage(key, value) {
  return localStorage.setItem(key, value);
}

function information(id) {
  return document.querySelector(`#inp${id}`).value;
}

button.addEventListener("click", () => {
  container.style.visibility = "hidden";
  setTimeout(() => {
    formcontainer.style.visibility = "visible";
  }, 1000);
});
