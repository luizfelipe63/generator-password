const resultText = document.querySelector('.result')
const lenght = document.querySelector('#lenght')
const includeUppercase = document.getElementById('uppercase')
const includeLowercase = document.getElementById('lowercase')
const includeNumbers = document.getElementById('numbers')
const includeSymbols = document.getElementById('symbols')
const genaratorCopy = document.querySelector('[data-copy]')
const generatePassword = document.querySelector('[data-genarator]')
const symbol = '!@#$%&*()_=+|'

//Math.floor: Retorna o maior inteiro que é menor ou igual a um número.
//Math.random: Retorna um número pseudo-aleatório entre 0 e 1.

class genaratorPassword {
  constructor(resultText) {
    this.resultText = resultText
  }

  genaratorX() {
    const xs = []

    if (includeUppercase.checked) {
      let uppperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      xs.push(uppperCase)
    }

    if (includeLowercase.checked) {
      let lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      xs.push(lowerCase)
    }

    if (includeNumbers.checked) {
      let numberCase = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
      xs.push(numberCase)
    }

    if (includeSymbols.checked) {
      let symbolCase = symbol[Math.floor(Math.random() * symbol.length)]
      xs.push(symbolCase)
    }

    if (xs.length == 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
  }

  //Gerar senhas
  genarator() {
    const len = lenght.value
    this.clear()
    for (let i = 0; i < len; i++) {
      const x = this.genaratorX()
      this.result += x
    }
  }

  //Copiar senha
  copy() {
    let passwordCopy = this.result
    navigator.clipboard.writeText(passwordCopy)
    alert('Senha copiada')
  }

  //Limpar tela
  clear() {
    this.result = ''
  }

  //Atulizar tela
  updatteDisplay() {
    this.resultText.innerHTML = this.result
  }
}

const Password = new genaratorPassword(resultText)

//Mostar a senha na tela
generatePassword.addEventListener('click', () => {
  Password.genarator()
  Password.updatteDisplay()
})

genaratorCopy.addEventListener('click', () => {
  Password.copy()
})
