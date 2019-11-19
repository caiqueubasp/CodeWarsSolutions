// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:


word = 'Abba';
words = ['aabb', 'abcd', 'bbaa', 'dada'];
//output = ['aabb', 'bbaa'];

function anagrams(word, words) {
    //use map then use a callback function that checks if all of the letters in word exist in words
    //include a check for length
    return words.filter(function (x) {
        if (x.length === word.length) {
            if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
                return x;
            }
        }
    });
    //return another list with all of the matching words
    //or return an empty list if there are none
}

anagrams(word, words);