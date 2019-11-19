// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

var s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];

function twoSort(s) {
    var l = s.sort().shift().split("").reduce((x, y, z) => x + "***" + y);
    return l;

}