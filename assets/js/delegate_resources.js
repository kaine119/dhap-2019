---
---
let form = document.querySelector("#password-form");
let password = document.querySelector("#password")

document.querySelector("#password-form").addEventListener("submit", function(e) {
  if (password.value == "{{ site.resources_password }}") {
    console.log("come on in!");
  } else {
    console.log("go away")
  }
  e.preventDefault();
});