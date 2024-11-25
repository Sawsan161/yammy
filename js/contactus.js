let inputName = document.querySelector("#input-name");
let inputEmail = document.querySelector("#input-email");
let inputTel = document.querySelector("#input-tel");
let inputNumber = document.querySelector("#input-number");
let inputPassword = document.querySelector("#input-password");
let inputRepassword = document.querySelector("#input-repassword");
let pValidName = document.querySelector(".valid-name");
let pValidEmail = document.querySelector(".valid-email");
let pValidTel = document.querySelector(".valid-tel");
let pValidNumber = document.querySelector(".valid-number");
let pValidPassword = document.querySelector(".valid-password");
let pValidRepassword = document.querySelector(".valid-repassword");
let button= document.querySelector(".btn");

button.addEventListener("click", function(){
    let name = inputName.value ;
    let email = inputEmail.value ;
    let tel = inputTel.value ;
    let number = inputNumber.value ;
    let password = inputPassword.value ;
    let repassword = inputRepassword.value ;

    pValidName.classList.add("d-none");
    pValidEmail.classList.add("d-none");
    pValidTel.classList.add("d-none");
    pValidNumber.classList.add("d-none");
    pValidPassword.classList.add("d-none");
    pValidRepassword.classList.add("d-none");

    let valid = true;


    if (name === "") {
        pValidName.classList.remove("d-none");
        valid = false;
    }

    if (email === "") {
        pValidEmail.classList.remove("d-none");
        valid = false;
    }

    if (tel === "") {
        pValidTel.classList.remove("d-none");
        valid = false;
    }

    if (number === "") {
        pValidNumber.classList.remove("d-none");
        valid = false;
    }

    if (password === "") {
        pValidPassword.classList.remove("d-none");
        valid = false;
    }

    if (repassword === "") {
        pValidRepassword.classList.remove("d-none");
        valid = false;
    } else if (password !== repassword) {
        pValidRepassword.innerText = "Passwords do not match!";
        pValidRepassword.classList.remove("d-none");
        valid = false;
    }

    if(valid){
        let userData ={
            userName :name,
            userEmail :email,
            userTel : tel,
            userNumber: number,
            userPassword : password,
            userRepassword :repassword,
        }
   
.console.log(userData);
    }
});





    
    