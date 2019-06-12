/////////// Part 1

//let re;

// literal expression
// re = /hello/;
// i = case insensitive
//re = /hello/i;
// g - global search
// re = /hello/g;

//console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result)

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);


// search() - Return index od the first match if not found returns -1
// const str = 'Hello there';
// const result = str.search(re);

// console.log(result);


// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const result = str.replace(re, 'Hi');

// console.log(result);



/////// Part 2
let re;
// literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;         // must start with "h"
re = /d$/i;         // must end with "d" 
re = /World$/i      // must end with "World"
re = /^hello$/i;    // begins with and ends with "hello"
re = /^h.llo$/i;    // . matches any ONE character
re = /h*llo/i;      // matches any character 0 or more times, wildcard
re = /gre?a?y/i;     // ? next to character makes it optional
re = /gre?a?y\?/i;   // escape character


// Brackets [] - Character sets
re = /gr[ae]y/i;        // must be one of characters in set - a or e
re = /[GF]ray/;         // must be a G or F
re = /[^GF]ray/;        // match anything except a G or F (negation)
re = /[A-Z]ray/;        // match any uppercase letter
re = /[a-z]ray/;        // match any lowercase letter
re = /[A-Za-z]ray/;     // match any letter of any case
re = /[0-9]ray/;        // match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;        // look for character before braces, for a specific number of occurances, specified inside


// String to match
const str = 'Hello World';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }

}

reTest(re, str);