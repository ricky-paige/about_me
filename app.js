'use strict';
var question1 = prompt('Does Ricky have any pets?').toLowerCase();

if (question1 === 'no' || question1 === 'n') {
  alert('Correct! Good job my dude');
  console.log('The user is right!');
  document.write('1. You got it right!');
} else if (question1 === 'yes' || question1 === 'y') {
  alert('You got it wrong friend');
  console.log('The user is wrong');
  document.write('Better luck next time /:');
} else {
  alert('That\'s not even a choice are you dumb?');
  console.log('The user is not smart.');
  document.write('Did you even try?');
}
