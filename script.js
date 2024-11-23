let eyeimg = document.getElementById("eyeclosed");
let pwd = document.getElementById("password");

eyeimg.onclick = function () {
   
    if (pwd.type == "password") {
        pwd.type = "text"; 
        eyeimg.src = "images/eye-icons/eye-open.png";
    } 
    else {
        pwd.type = "password";
        eyeimg.src = "images/eye-icons/eye-close.png";
    }
};
