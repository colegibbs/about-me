'use strict';

// //welcome message
 let firstName = prompt('What is your name?');
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

//fifth question
let answerFive = prompt('Do I come from the food industry?').toLowerCase().trim();
if(answerFive === 'yes' || answerFive === 'y') {
  alert('You are correct.');
}
else if(answerFive === 'no' || answerFive === "n"){
  alert('You are incorrect.');
}
else{
  alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
}
