
window.onload = loadEvents

function loadEvents() {
let acrewatchFormEl = document.getElementById("acrewatchForm");
let submitMsgEl = document.getElementById("submitMsg");

let nameEl = document.getElementsByClassName("required");
let errMsgEl = document.getElementsByClassName("errMsg");

/*let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let mobileEl = document.getElementById("mobile");
let mobileErrMsgEl = document.getElementById("mobileErrMsg");*/

for (let i = 0; i < nameEl.length; i++){
    let events = ["blur", "keyup"]
    for (eventElement in events) {
        console.log(events[i])
       nameEl[i].addEventListener(events[i], function(event) {
        if (event.target.value === "") {
            errMsgEl[i].textContent =nameEl[i].getAttribute("msg");
        } else {
            errMsgEl.textContent = "";
        }
        });
    }
}
/*emailEl.addEventListener("blur", function(event) {
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
  });*/


acrewatchFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
}