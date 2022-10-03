const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let finalPass = "";
const rangeValue = document.getElementById("rangeValue");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
rangeValue.addEventListener("input", getRangeValue);

function getRangeValue(e) {
  let {value} = e.target;
  rangeValue.value = value;
}

function getPasswort() {
  const pass = [];
  for (let i = 0; i < rangeValue.value; i++) {
    pass.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  finalPass = pass.join("");
  passwordOne.textContent = finalPass;
  passwordTwo.textContent = finalPass;
}

function generatePassword() {
  const pass = [];
  for (let i = 0; i < rangeValue.value; i++) {
    pass.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  finalPass = pass.join("");
}

document.getElementById("btn-generate").addEventListener("click", function (){
  getPassOne()
  getPassTwo()
})

function getPassOne() {
  generatePassword()
  passwordOne.textContent = finalPass;
}

function getPassTwo() {
  generatePassword()
  passwordTwo.textContent = finalPass;
}
