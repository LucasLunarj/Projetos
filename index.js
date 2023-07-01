let profilePicture = document.querySelector('.profile img');
const html = document.querySelector('.light');
const buttonClick = document.querySelector(".switch button");
let switchButton = true

buttonClick.addEventListener("click", function () {
    html.classList.toggle('light')
    
    if (switchButton === true) {
        switchButton = false;
        profilePicture.setAttribute("src", './assets/avatar.jpg');
        console.log(profilePicture);
    } else {
        console.log(profilePicture);
        profilePicture.setAttribute("src", './assets/avatarLight.jpg');
        switchButton = true;

    }

})