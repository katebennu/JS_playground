
function palindrome(str) {
str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
var rev = str.split("").reverse().join("");
return rev == str;
}
palindrome("_race car");
