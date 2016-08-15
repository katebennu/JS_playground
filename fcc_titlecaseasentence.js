function titleCase(str) {
  arr = str.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
  	arr[i] = arr[i].split("");
  	console.log(arr[i]);
  	arr[i][0] = arr[i][0].toUpperCase();
  	arr[i] = arr[i].join("");
  }
  str = arr.join(" ");
  return str;
}
titleCase("I'm a little tea pot");
