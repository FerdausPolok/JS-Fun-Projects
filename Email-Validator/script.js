function validation() {
  let form = document.getElementById("form"); //getting the form
  let email = document.getElementById("email").value; //getting user given email
  let text = document.getElementById("text"); //getting the bottom note/ alert text
  const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regular Expression of email format

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Note: Only Valid Email Addresses are allowed ⚠️";
    text.style.background = "rgba(67, 2, 2, 0.964)";
    text.style.color = "#ffffff";
    text.style.border = "none";
  } 
  else if (email.match(EMAIL_PATTERN)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your email address is valid!";
    text.style.background = "#4CAF50";
    text.style.color = "#ffffff";
    text.style.border = "0.1px solid white";
  } 
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter valid email address!";
    text.style.background = "#F44336";
    text.style.color = "#ffffff";
    text.style.border = "0.1px solid white";
  }
}
