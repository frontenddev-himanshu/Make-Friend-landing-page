AOS.init();



// login
let loginPage = document.querySelector(".login-page")
let onOff = document.querySelector(".cut-bar")

let navLogin = document.querySelector("#nav-login")


// function

function login() {

    loginPage.style.opacity = "1";
    loginPage.style.visibility = "visible"

}

setTimeout(login, 2000);


// btn
onOff.addEventListener("click", function () {

    loginPage.style.opacity = "0";
    loginPage.style.visibility = "hidden"

});

// navLogin
navLogin.addEventListener("click", function () {

    loginPage.style.opacity = "1";
    loginPage.style.visibility = "visible"

});