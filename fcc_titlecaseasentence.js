function titleCase(str) {
  arr = str.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
  	arr[i] = arr[i].split("");
  	arr[i][0] = arr[i][0].toUpperCase();
  	arr[i] = arr[i].join("");
  }
  return arr.join(" ");
}
titleCase("I'm a little tea pot");
