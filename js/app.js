'use strict';

//welcome message
function welcomMessage(){
  let firstName = prompt('What is your name?');
  console.log('fristName:', firstName);
  alert(`Hey ${firstName}, it's great to have you visiting my website!`);
  let correctAnswers = 0;
  alert('Before I let you onto my website your going to play a guessing game to learn some facts about me. Read? LETS GO!');
}


//first question
function questionOne(){
  let answerOne = prompt('Did I go to college for Chemistry?').toLowerCase().trim();
  console.log('answerOne:', answerOne);
  if(answerOne === 'yes' || answerOne === 'y'){
    alert(`Yes ${firstName} that's correct.`);
    correctAnswers++;
  }
  else if(answerOne === 'no' || answerOne === 'n'){
    alert(`No ${firstName} that's incorrect.`);
  }
  else{
    alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
  }
}

//second question
function questionTwo(){
  let answerTwo = prompt('I have a few hobbies. Is surfing one of them?').toLowerCase().trim();
  console.log('answerTwo:', answerTwo);
  if(answerTwo === 'yes' || answerTwo === 'y'){
    alert('That\'s incorrect!');
  }
  else if(answerTwo === 'no' || answerTwo === 'n'){
    alert('That\'s correct!');
    correctAnswers++;
  }
  else{
    alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
  }
}

//third question
function questionThree(){
  let answerThree = prompt('Do I have any children?').toLowerCase().trim();
  console.log('answerThree:', answerThree);
  if(answerThree === 'yes' || answerThree === 'y') {
    alert('Wrong!');
  }
  else if(answerThree === 'no' || answerThree === 'n') {
    alert('Right!');
    correctAnswers++;
  }
  else{
    alert(`Sorry ${firstName}, but you entered an invlaid answer. Let's move on!`);
  }
}

//fourth question
function questionFour(){
  let answerFour = prompt('Did I grow up in Washinton?').toLowerCase().trim();
  console.log('answerFour:', answerFour);
  if(answerFour === 'yes'|| answerFour === 'y') {
    alert('CORRECT!!!');
    correctAnswers++;
  }
  else if(answerFour === 'no' || answerFour === 'n') {
    alert('INCORRECT!');
  }
  else {
    alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
  }
}

//fifth question
function questionFive(){
  let answerFive = prompt('Do I come from the food industry?').toLowerCase().trim();
  console.log('answerFive: ', answerFive);
  if(answerFive === 'yes' || answerFive === 'y') {
    alert('You are correct.');
    correctAnswers++;
  }
  else if(answerFive === 'no' || answerFive === 'n'){
    alert('You are incorrect.');
  }
  else{
    alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
  }
}

//6th question
function questionSix(){
  for(let i = 0; i < 4; i++) {
    let number = 4;
    let answerSix = prompt('What number am I thinking of?');
    console.log('answerSix: ', answerSix);
    answerSix = Number(answerSix);

    if(answerSix > number) {
      alert('Your guess was too high!');
    }
    else if(answerSix < number) {
      alert('Your guess was too low!');
    }
    else if(answerSix === number){
      alert('That\'s correct!');
      correctAnswers++;
      break;
    }
    else {
      alert('This was not a valid answer, but it still counted as a guess!');
    }

    if(i === 3) {
      alert(`The correct answer was ${number}`);
    }
  }
}

//7th question
for(let i = 0; i < 6; i++) {
  let answerSeven = prompt('Guess one of my favorite musics genres.').toLowerCase().trim();
  console.log('answerSeven: ', answerSeven);
  let favoriteMusic = ['metal', 'rap', 'rock', 'folk', 'hip hop'];
  let correct = false;

  for(let j = 0; j < favoriteMusic.length; j++) {
    if(answerSeven === favoriteMusic[j]){
      alert('That is correct! Congrats!');
      correctAnswers++;
      correct = true;
    }
  }

  if(i < 5 && correct === false){
    alert('Sorry, but you\'re incorrect! Try again.');
  }
  else if(i === 5 && correct === false) {
    alert(`I'm sorry, but your out of guesses.The correct possible answers were: ${favoriteMusic}`);
  }
  else if(correct === true) {
    break;
  }
}

//final message
alert(`Thanks for playing this guessing game! Enjoy the site! You got ${correctAnswers} questions right out of 7!`);
