let profilePicture = document.querySelector('.profile img');
const html = document.querySelector('html');
const buttonClick = document.querySelector(".switch button");
let switchButton = true

buttonClick.addEventListener("click", function () {
    html.classList.toggle('light')
    
    if (switchButton === true) {
        switchButton = false;
        profilePicture.setAttribute("src", './assets/avatar2.png');
        profilePicture.setAttribute("alt", 'Profile Picture light mode');
        console.log(profilePicture);
    } else {
        console.log(profilePicture);
        profilePicture.setAttribute("src", './assets/avatar.png');
        profilePicture.setAttribute("alt", 'Profile picture dark mode');
        switchButton = true;

    }

})