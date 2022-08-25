function good(str) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str)&& /[1-9]/.test(str)&&/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}


function validateForm() {
  var valid = true;
  if(!good(document.register.pass.value)){
  alert("Please Enter valid password use (Upper&Lower Letters),[1,9]and special characters ");
  document.register.pass.focus();
  valid=false; 
  }
  if(document.register.pass.value!=document.register.pass1.value){
  alert("Not matching ");
  document.register.pass1.focus();
  valid=false;
  }
  return valid;
}

const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
