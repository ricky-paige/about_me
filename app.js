'use strict';
var response1 = prompt('Does Ricky have any pets?').toLowerCase();

if (response1 === 'no' || response1 === 'n') {
  alert('Correct! Good job my dude');
  console.log('The user is right!');
  document.write('1. You got it right!');
  document.write('<br>');
} else if (response1 === 'yes' || response1 === 'y') {
  alert('You got it wrong friend');
  console.log('The user is wrong');
  document.write('1. Better luck next time /:');
  document.write('<br>');
} else {
  alert('That\'s not even a choice friendo');
  console.log('The user is not smart.');
  document.write('1. Try again :)');
  document.write('<br>');
}

var response2 = prompt('Does Ricky like sports?').toLowerCase();
if (response2 === 'no' || response2 === 'n') {
  alert('That\'s right! Good job!');
  console.log('The user is right');
  document.write('2. Correctamundo!');
  document.write('<br>');
} else if (response2 === 'yes' || response2 === 'y') {
  alert('Didn\'t get this one, sorry.');
  console.log('The user is wrong');
  document.write('2. One more try!');
  document.write('<br>');
} else {
  alert('You really like giving wrong answers don\'t you?');
  console.log('Again, user ain\'t the brightest');
  document.write('2. Try for real this time friend.');
  document.write('<br>');
}
