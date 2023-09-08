// Write a function that removes all duplicates case insensitive characters from a string.
// For example: “I love Javascript” => “loejscrpt”; “hello world” => “he wrd”

const str1 = "I love Javascript";
const str2 = "hello world";

const removeDups = (str) => {
  // Convert the input string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Initialize an object to keep track of character counts
  const charCounts = {};

  // Iterate through each character in the input string
  str.split('').forEach(char => {
    
    // If the character is not in the charCounts object, add it and initialize the count to 1
    if (!charCounts.hasOwnProperty(char)) {
        charCounts[char] = 1;
      } else {
        // If the character has already been encountered, increment its count
        charCounts[char]++;
      }
  })
  
  // If the character occurs only once, add it to the result
  const uniqueChars = Object.keys(charCounts).filter(char => charCounts[char] < 2)

  // Join the unique characters to form the result string
  return uniqueChars.join('');
};

console.log(removeDups(str1)); // Output: 'loejscrpt'
console.log(removeDups(str2)); // Output: 'he wrd'

