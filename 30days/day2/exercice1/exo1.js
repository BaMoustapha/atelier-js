let challenge = '30 Days Of JavaScript';

console.log(challenge.length)


console.log(challenge.toUpperCase)


console.log(challenge.toLowerCase)


var firstWord = challenge.substring(0, challenge.indexOf(' '));
console.log(firstWord); 

console.log(challenge.substring(2,7))


console.log(challenge.includes('Script')) 


console.log(challenge.split())
console.log(challenge.split(' '))

let companies = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(companies.split(',')) 

console.log(companies.split(', ')) 

console.log(challenge.replace('JavaScript', 'Python')) 


console.log(challenge.charAt(15));

console.log(challenge.indexOf('J'));

console.log(challenge.indexOf('a'));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));

 
console.log(sentence.search('because'));

let str = ' 30 Days Of JavaScript '

console.log(str.trim());

console.log(challenge.startsWith('30 Days Of JavaScript'))

console.log(challenge.endsWith('30 Days Of JavaScript'))

console.log(challenge.match(/a/g));


var str1 = '30 Days of ';
var str2 = 'JavaScript';
var concat = str1.concat(str2);
console.log(concat);

console.log(challenge.repeat(2));