// задание 2 6.4

function getNum(number) {
  if (number > 1000 || number <= 0 || number === 1) {
    return console.log("error");
  } else if (number === 2) {
    return console.log(number + " простое число");
  } else {
    for (let x = 2; x < number; x++) {
      if (number % x === 0) {
        return console.log(number + " не простое число");
      }
    }
  }
  return console.log(number + " простое число");
}
getNum(73);
