'use strict';
var response1 = prompt('Does Ricky have any pets?').toLowerCase();

if (response1 === 'no' || response1 === 'n') {
  alert('Correct! Good job my dude');
  console.log('The user is right!');
  document.write('1. You got it right!');
} else if (response1 === 'yes' || response1 === 'y') {
  alert('1. You got it wrong friend');
  console.log('The user is wrong');
  document.write('Better luck next time /:');
} else {
  alert('1. That\'s not even a choice friendo');
  console.log('The user is not smart.');
  document.write('Try again :)');
}
