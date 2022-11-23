// задание 1 6.2

const arr = ["sdsads", 0, 2, 3];
let even = 0;
let odd = 0;
let zero = 0;
let anotherType = 0;

function getNum(arry) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] === 0) {
        zero++;
      } else if (arr[i] % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    } else {
      anotherType++;
    }
  }
}
getNum(arr);
console.log(
  `odd ${odd}; even ${even}; zero ${zero}; another type ${anotherType};`
);