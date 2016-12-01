'use strict';
var username = prompt('Hello friend we\'re gonna play a guessing game, what\'s your name?');
alert('Nice to meet you ' + username + '!');
var counter = 0;

var response1 = prompt('Does Ricky have any pets?').toLowerCase();
if (response1 === 'no' || response1 === 'n') {
  alert('Correct! Good job my dude');
  console.log('The user is right!');
  document.write('1. You got it right!');
  document.write('<br>');
  counter += 1;
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
  counter += 1;
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

var response3 = prompt('Does Ricky play any instruments?').toLowerCase();
if (response3 === 'yes' || response3 === 'y') {
  alert('You\'re awesome at this dude!');
  console.log('The user is right!');
  document.write('3. Good job!');
  document.write('<br>');
  counter += 1;
} else if (response3 === 'no' || response3 === 'n') {
  alert('Incorrect buddy /:');
  console.log('The user is wrong');
  document.write('3. You can do this, I believe in you!');
  document.write('<br>');
} else {
  alert('I feel like you\'re doing this to annoy me');
  console.log('This response though...');
  document.write('3. I don\'t even know what to say');
  document.write('<br>');
}

var response4 = prompt('Did Ricky ever live in Las Vegas?').toLowerCase();
if (response4 === 'yes' || response4 === 'y') {
  alert('Damn, good job yo!');
  console.log('The user is right!');
  document.write('4. Another great job!');
  document.write('<br>');
  counter += 1;
} else if (response4 === 'no' || response4 === 'n') {
  alert('Super wrong, sorry dude.');
  console.log('The user is wrong');
  document.write('4. Maybe try one more time?');
  document.write('<br>');
} else {
  alert('/:');
  console.log('Really dude?');
  document.write('4. You must be fun at parties...');
  document.write('<br>');
}

var response5 = prompt('Does Ricky like seafood?').toLowerCase();
if (response5 === 'yes' || response5 === 'y') {
  alert('Damn right he does!');
  console.log('The user is right');
  document.write('5. You\'re really good at this!');
  document.write('<br>');
  counter += 1;
} else if (response5 === 'no' || response5 === 'n') {
  alert('Got that one wrong');
  console.log('The user is wrong');
  document.write('5. Sorry :(');
  document.write('<br>');
} else {
  alert('Well this was fun, have a nice day');
  console.log('Finally it\'s over');
  document.write('5. I don\'t know what else to put here');
  document.write('<br>');
}

var response6 = prompt('What is my favorite number?')
if (response6 === '13') {
  alert('That\'s right!');
  console.log('The user is right');
  document.write('6. Got another one right!');
  document.write('<br>');
  counter += 1;
} else if (response6 < '13') {
  alert('Your guess is too low!');
  console.log('The user guessed too low');
  document.write('6. Too low, try again!');
  document.write('<br>');
} else {
  alert('You guessed too high!');
  console.log('The user guessed too high');
  document.write('6. Too high, try again');
  document.write('<br>');
}

document.write('You got ' + counter + ' out of 6 correct ' + username);
