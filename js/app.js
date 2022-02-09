'use strict';

// //welcome message
// let firstName = prompt('What is your name?');
// alert(`Hey ${firstName}, it's great to have you visiting my website!`);

// //guessing game
// alert('Before I let you onto my website your going to play a guessing game to learn some facts about me. Read? LETS GO!');

// //first question
// let answerOne = prompt('Did I go to college for Chemistry?').toLowerCase().trim();
// if(answerOne === 'yes' || answerOne === 'y'){
//   alert(`Yes ${firstName} that's correct.`);
// }
// else if(answerOne === 'no' || answerOne === 'n'){
//   alert(`No ${firstName} that's incorrect.`);
// }
// else{
//   alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
// }

// //second question
// let answerTwo = prompt('I have a few hobbies. Is surfing one of them?').toLowerCase().trim();
// if(answerTwo === 'yes' || answerTwo === 'y'){
//   alert('That\'s incorrect!');
// }
// else if(answerTwo === 'no' || answerTwo === 'n'){
//   alert('That\'s correct!');
// }
// else{
//   alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
// }

// //third question
// let answerThree = prompt('Do I have any children?').toLowerCase().trim();
// if(answerThree === 'yes' || answerThree === 'y') {
//   alert('Wrong!');
// }
// else if(answerThree === 'no' || answerThree === 'n') {
//   alert('Right!');
// }
// else{
//   alert(`Sorry ${firstName}, but you entered an invlaid answer. Let's move on!`);
// }

// //fourth question
// let answerFour = prompt('Did I grow up in Washinton?').toLowerCase().trim();
// if(answerFour === 'yes'|| answerFour === 'y') {
//   alert('CORRECT!!!');
// }
// else if(answerFour === 'no' || answerFour === 'n') {
//   alert('INCORRECT!');
// }
// else {
//   alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
// }

// //fifth question
// let answerFive = prompt('Do I come from the food industry?').toLowerCase().trim();
// if(answerFive === 'yes' || answerFive === 'y') {
//   alert('You are correct.');
// }
// else if(answerFive === 'no' || answerFive === 'n'){
//   alert('You are incorrect.');
// }
// else{
//   alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
// }

// //final message
// alert('Thanks for playing this guessing game! Enjoy the site!');

// //6th question
// for(let i = 0; i < 4; i++) {
//   let number = 4;
//   let answerSix = prompt('What number am I thinking of?');
//   answerSix = Number(answerSix);

//   if(answerSix > number) {
//     alert('Your guess was too high!');
//   }
//   else if(answerSix < number) {
//     alert('Your guess was too low!');
//   }
//   else if(answerSix === number){
//     alert('That\'s correct!');
//     break;
//   }
//   else {
//     alert('This was not a valid answer, but it still counted as a guess!');
//   }

//   if(i === 3) {
//     alert(`The correct answer was ${number}`);
//   }
// }

//7th question
//has multiple answer stored in an array
//gives the user 6 attempts to guess the correct answer (for loop)
for(let i = 0; i < 6; i++) {
  let answerSeven = prompt('Guess one of my favorite musics genres.').toLowerCase().trim();
  console.log(answerSeven);
  let favoriteMusic = ['metal', 'rap', 'rock', 'folk', 'hip hop'];
  let correctAnswer = false;

  for(let j = 0; j < favoriteMusic.length; j++) {
    if(answerSeven === favoriteMusic[j]){
      alert('That is correct! Congrats!');
      correctAnswer = true;
    }
  }

  if(i < 5 && correctAnswer === false){
    alert('Sorry, but you\'re incorrect! Try again.');
  }
  else if(i === 5 && correctAnswer === false) {
    alert(`I'm sorry, but your out of guesses.The correct possible answers were: ${favoriteMusic}`);
  }
  else if(correctAnswer === true) {
    break;
  }
}
//question ends if they run out of attemepts or guess the right answer
//tell the user all the possible right answer

