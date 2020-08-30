// const person={
//     name:'prashant'
// }
// // person.xxx=function(){  //we dont need prototype for object , we need to use prototype only with constructor function
// //     return 'hi'
// // }
// console.log(person.name)
// console.log(person)

// //console.log(object.hasOwnProperty())

const puzzleEl=document.querySelector('#puzzle')
const guessesEl=document.querySelector('#guesses')
const statusEl=document.querySelector('#status')

 const game1 = new Hangman('Cat', 2)
 console.log(game1)

 puzzleEl.textContent=game1.getPuzzle()
 guessesEl.textContent=game1.remainingGuesses
  game1.calStatus()
  statusEl.textContent=game1.statusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)

    if(!(game1.status==='Finished ! Bravo' || game1.status==='Failed')){
        puzzleEl.textContent=game1.getPuzzle()
        guessesEl.textContent=game1.remainingGuesses
        game1.calStatus()
        statusEl.textContent= game1.statusMessage()
    }

})