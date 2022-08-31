const resultText = document.querySelector('.result')
const lenght = document.querySelector('#lenght')
const includeUppercase = document.getElementById('uppercase')
const includeLowercase = document.getElementById('lowercase')
const includeNumbers = document.getElementById('numbers')
const includeSymbols = document.getElementById('symbols')
const generatePassword = document.querySelector('[data-genarator]')
const upeerLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '!@#$%&*()_=+|'

//Math.floor: Retorna o maior inteiro que é menor ou igual a um número.
//Math.random: Retorna um número pseudo-aleatório entre 0 e 1.

/*
function getUpeerCase() {
  return upeerLetters[Math.floor(Math.random() * upeerLetters.length)]
}

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumberCase() {
  return number[Math.floor(Math.random() * number.length)]
}

function getSymbolCase() {
  return symbol[Math.floor(Math.random() * symbol.length)]
}

function genaratorX() {
  const xs = []

  if (includeUppercase.checked) {
    xs.push(getUpeerCase())
  }

  if (includeLowercase.checked) {
    xs.push(getLowerCase())
  }

  if (includeNumbers.checked) {
    xs.push(getNumberCase())
  }

  if (includeSymbols.checked) {
    xs.push(getSymbolCase())
  }

  if (xs.length == 0) return ''

  return xs[Math.floor(Math.random() * xs.length)]
}

generatePassword.addEventListener('click', () => {
  const len = lenght.value
  let password = ''
  for (let i = 0; i < len; i++) {
    const x = genaratorX()
    password += x
  }
  resultText.innerHTML = password
})
*/

class genaratorPassword {
  constructor(resultText) {
    this.resultText = resultText
  }

  getUpeerCase() {
    return upeerLetters[Math.floor(Math.random() * upeerLetters.length)]
  }

  genaratorX() {
    const xs = []

    if (includeUppercase.checked) {
      xs.push(this.getUpeerCase)
    }

    return xs[Math.floor(Math.random() * xs.length)]
  }

  updatteDisplay() {
    const len = lenght.value
    let password = ''
    for (let i = 0; i < len; i++) {
      const x = this.genaratorX()
      password += x
    }
    this.resultText.innerHTML = password
  }
}

const Password = new genaratorPassword(resultText)

//Mostar a senha na tela
generatePassword.addEventListener('click', () => {
  Password.updatteDisplay()
})
