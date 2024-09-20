let displayinp = "";
document.querySelector(".bttn1").addEventListener("click", () => {
  displayinp = displayinp + "1";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn2").addEventListener("click", () => {
  displayinp = displayinp + "2";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn3").addEventListener("click", () => {
  displayinp = displayinp + "3";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn4").addEventListener("click", () => {
  displayinp = displayinp + "4";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn5").addEventListener("click", () => {
  displayinp = displayinp + "5";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn6").addEventListener("click", () => {
  displayinp = displayinp + "6";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn7").addEventListener("click", () => {
  displayinp = displayinp + "7";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn8").addEventListener("click", () => {
  displayinp = displayinp + "8";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn9").addEventListener("click", () => {
  displayinp = displayinp + "9";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttn0").addEventListener("click", () => {
  displayinp = displayinp + "0";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttnc").addEventListener("click", () => {
  displayinp = "";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttnp").addEventListener("click", () => {
  displayinp = displayinp + "+";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttns").addEventListener("click", () => {
  displayinp = displayinp + "-";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttnm").addEventListener("click", () => {
  displayinp = displayinp + "*";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttnd").addEventListener("click", () => {
  displayinp = displayinp + "/";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttno").addEventListener("click", () => {
  displayinp = displayinp + ".";
  document.querySelector("#inp").value = displayinp;
});

document.querySelector(".bttne").addEventListener("click", () => {
  let result = eval(displayinp);
  displayinp = result;
  document.querySelector("#inp").value = displayinp;
});

