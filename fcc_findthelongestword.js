function findLongestWord(str) {
  var list = str.split(" ");
  var longest = list[0].length;
  for (var i = 1; i < list.length; i++) {
    if (list[i].length > longest) {
      longest = list[i].length;
    }
  }
  return longest;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");
