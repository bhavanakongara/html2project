
window.onload = loadEvents

function loadEvents() {
let acrewatchFormEl = document.getElementById("acrewatchForm");
console.log(acrewatchFormEl)
let nameEl = document.getElementById("name");
console.log(nameEl)
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let mobileEl = document.getElementById("mobile");
let mobileErrMsgEl = document.getElementById("mobileErrMsg");

nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Enter Value";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Enter Value";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

mobileEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      mobileErrMsgEl.textContent = "Enter Value";
    } else {
      mobileErrMsgEl.textContent = "";
    }
  });


acrewatchFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});

}