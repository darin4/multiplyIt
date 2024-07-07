const button = document.querySelector('.checkButton')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const getRandomInRange = (min = 1, max = 9) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}
let firstRandomNumber = getRandomInRange()
let secondRandomNumber = getRandomInRange()
result.textContent = firstRandomNumber + ' * ' + secondRandomNumber
button.addEventListener('click', () => {
  let userAnswer = input.value
  if ((firstRandomNumber * secondRandomNumber) === Number(userAnswer)) {
    alert("It's right, you are great!") //if right
    firstRandomNumber = getRandomInRange()
    secondRandomNumber = getRandomInRange()
    result.textContent = firstRandomNumber + ' * ' + secondRandomNumber    
  } else {
     alert("It's false, try one more time!") //if wrong
     }
  input.value = ''
  input.focus()
  //console.log(userAnswer)
});
