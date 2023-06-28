let profilePicture = document.querySelector('.profile img');
console.log(profilePicture);
const buttonClick = document.querySelector(".switch button");
let switchButton = true
buttonClick.addEventListener("click", function(){
if (switchButton === true) {
    document.querySelector("html").classList.add('light');
    switchButton = false;
    console.log(switchButton)
} else {
    document.querySelector("html").classList.remove('light');
    switchButton = true
    console.log(switchButton)
}

})