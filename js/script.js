// Banner Autoslide START
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("slide-img");

  if (n > imgList.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = imgList.length;
  }

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 4000);
// Banner Autoslide END

// Form Validation START
const button = document.getElementById("submitBtn");
let isEmpty;
button.addEventListener("click", () => {
  validateForm();
});

function validateForm() {
  let name = document.forms["contactUs"]["name"].value;
  let email = document.forms["contactUs"]["email"].value;
  let select = document.forms["contactUs"]["interest"];
  let interest = select.options[select.selectedIndex].value;

  if (name == "" || email == "" || interest == "0") {
    alert("Please Fill All Fields");
    return false;
  } else {
    alert("Successfully Sent!");
    return true;
  }
}
// Form Validation END