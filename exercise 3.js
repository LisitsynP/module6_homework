function getSum(num1) {
  return function getNum(num2) {
    return num1 + num2;
  };
}
const getRes = getSum(5);
console.log(getRes(3));
