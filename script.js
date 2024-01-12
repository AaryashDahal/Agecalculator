const birthDate = document.getElementById('birthday');
const button = document.getElementById("btn");
const result = document.getElementById("yourage")

function yourAge() {

const actualBirthDate = birthDate.value
const todayDate = new Date()
const birthday = new Date(actualBirthDate)
const age = todayDate.getFullYear() - birthday.getFullYear();

   result.innerText= "Your Age is:"+ age
}






button.addEventListener("click", yourAge);