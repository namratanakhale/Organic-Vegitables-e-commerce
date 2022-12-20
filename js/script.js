let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
   
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');

let index = 0;
let  interval=setInterval(changeImage, 3000);
function next(){
    clearInterval(interval);
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    
}
function prev(){
    clearInterval(interval);
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function changeImage(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}


// login and signUp 


document.addEventListener("DOMContentLoaded", () => {  
    const loginForm = document.querySelector("#login-form");
    const createAccountForm = document.querySelector("#createAccount");
    document
      .querySelector("#linkCreateAccount")
      .addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
      });
  
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });
  });

//   ...........

  
  function store(){

    var Uname = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var cpw = document.getElementById('c-password').value;
    
    var user = {
        username: Uname,
        email: email,
        password: pw,
        confirmPass: cpw
      };  
    var json = JSON.stringify(user);

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(Uname.length == 0){
        alert('Please fill in username');

    }else if(email.length == 0){
        alert('Please fill in email');

    }
    else if(pw.length == 0){
        alert('Please fill in password');

    }
    else if(cpw.length == 0){
        alert('Please fill in password');

    }
    else if(pw!=cpw){
        alert("password won't match")
    }
    else if(cpw.length > 8){
        alert('Max of 8');

    }
    else if(!pw.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{  
        alert('Your account has been created');
        localStorage.setItem(Uname, json);  
    }
}

//checking
function check(){

    var userLogin = document.getElementById('userLogin').value;
    var userPw = document.getElementById('userPw').value;

    var user = localStorage.getItem(userLogin);
    var data = JSON.parse(user);
   
     if(userLogin === data.username && userPw === data.password){
        alert('You are logged in.');  
        return true;
    }
    else{
        alert("Oops! Validation failed!");
        event.preventDefault()
    }
}
function myFunction() {
    var x = document.getElementById("userPw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

