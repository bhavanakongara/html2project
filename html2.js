$('#get').click(function(){
    $.ajax({

        type:"GET",
        success:function(){
            <form name="myForm" action="/action_page.php" method="post" id="acrewatchForm">
                  <ul>
                    <li>
                      <input type="text" msg="Please enter name." class="form-elements required" placeholder="Name*">
                      <p class="errMsg"></p>
                    </li>
                    <li>
                      <input type="text" msg="Please enter email." class="form-elements required" placeholder="Email*">
                      <p class="errMsg"></p>
                    </li>
                    <li>
                      <input type="text" msg="Please enter mobile number." class="form-elements required" placeholder="Mobile Number*">
                      <p class="errMsg"></p>
                    </li>
                    <li>
                      <select class="form-select" id="services">
                        <option class="options" value="1">Choose Service*</option>
                        <option class="options" value="2">Option 1</option>
                        <option class="options" value="3">Option 2</option>
                        <option class="optoins" value="4">Option 3</option>
                      </select>
                    </li>
                    <li>
                      <textarea msg="Please enter message." class="form-area required" placeholder="Message"></textarea>
                      <p class="errMsg"></p>
                    </li>
                    <li>
                      <input class="form-button" type="submit" value="SUBMIT">
                      <p id="submitMsg"></p>
                    </li>
                  </ul>
                </form>

        },
        error : function(data){
            console.log(data)
        }
    })
})

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