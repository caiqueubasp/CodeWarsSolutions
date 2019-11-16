// Write a function that returns the total
// surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  var newArr = [];
  var surface = width * height * 2 + width * depth * 2 + depth * height * 2;
  var volume = width * height * depth;
  var popSurface = newArr.push(surface);
  var popArea = newArr.push(volume);
  return newArr;
}

getSize(2, 4, 6);
// getSize(2, 6, 8);
// getSize(2, 4, 10);
// getSize(50, 80, 40);
// getSize(20, 40, 60);
