const textDisplay = document.getElementById('text')
const phrases = [
  'Esto es una invitación interactiva para...',
  'la boda de Sergio y Mercedes...',
  '¿Te apuntas?',
]

// const phrases = ['Esto es ...', 'la boda...', '¿Te apuntas?']

let sentence = 0
let character = 0
let currentSentence = []
let isDeleting = false
let isEnd = false

const loop = () => {
  isEnd = false

  if (sentence < phrases.length) {
    if (!isDeleting && character <= phrases[sentence].length) {
      currentSentence.push(phrases[sentence][character])

      character++
      textDisplay.innerHTML = currentSentence.join('')
    }

    if (isDeleting && sentence <= phrases[sentence].length) {
      currentSentence.pop(phrases[sentence][character])
      character--
      textDisplay.innerHTML = currentSentence.join('')
    }

    if (character === phrases[sentence].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && character === 0) {
      currentSentence = []
      isDeleting = false
      sentence++
      if (sentence === phrases.length) {
        sentence = 0
      }
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 50
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
