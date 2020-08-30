
class Hangman
{
  constructor(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status='Playing'
  }
  calStatus()
  {
    let getPuzzleArray=this.getPuzzle().split('')
    if(this.remainingGuesses>0 && !getPuzzleArray.includes('*'))
    {
        this.status='Finished ! Bravo'
    }
    if(this.remainingGuesses<=0 && getPuzzleArray.includes('*'))
    {
        this.status='Failed'
    }

    return this.status
  }
  statusMessage()
  {
    let message=''
    if(this.status==='Playing')
       message=`Guesses Left : ${this.remainingGuesses}`

    if(this.status==='Failed')
       message=`Nice Try ! The word was ${this.word.join('').toUpperCase()}` // 'join() is opposite of split()'

    if(this.status==='Finished ! Bravo')
    message='Great work ! You guessed the word'

    return message
  }
  getPuzzle()
  {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
  }
  makeGuess(guess)
  {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
  }

}

// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status='Playing'
// }

// Hangman.prototype.calStatus=function(){
//     let getPuzzleArray=this.getPuzzle().split('')
//     if(this.remainingGuesses>0 && !getPuzzleArray.includes('*'))
//     {
//         this.status='Finished ! Bravo'
//     }
//     if(this.remainingGuesses<=0 && getPuzzleArray.includes('*'))
//     {
//         this.status='Failed'
//     }

//     return this.status
// }

// Hangman.prototype.statusMessage=function(){
//     let message=''
//     if(this.status==='Playing')
//        message=`Guesses Left : ${this.remainingGuesses}`

//     if(this.status==='Failed')
//        message=`Nice Try ! The word was ${this.word.join('').toUpperCase()}` // 'join() is opposite of split()'

//     if(this.status==='Finished ! Bravo')
//     message='Great work ! You guessed the word'

//     return message
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }

// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     }

//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--
//     }
// }

