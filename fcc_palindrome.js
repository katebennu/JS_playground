
function palindrome(str) {
var str = str.toLowerCase().replace(/\W/g, '');
var rev = str.split("").reverse().join("");
return rev == str;
}
palindrome("race car");
