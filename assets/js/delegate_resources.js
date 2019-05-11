---
---

form.addEventListener("submit", function(e) {
  let expando = document.querySelector("#expando");

  let form = document.querySelector("#password-form");
  let password = document.querySelector("#password")
  let message = document.querySelector("#password-form__flash");
  
  window.crypto.subtle.digest("SHA-256", 
        (new TextEncoder()).encode(password.value))
  .then(function(digest) {
    let hash = Array.from(new Uint8Array(digest))
                .map(val => val.toString(16))
                .join('');
    if (hash == "{{ site.resources_password }}") {
      expando.classList.add("open");
    } else {
      
    }
  });

  e.preventDefault();
});