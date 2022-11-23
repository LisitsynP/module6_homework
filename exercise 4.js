const numInterval = function (a, b) {
  const interval = setInterval(function () {
    console.log(a);
    a++;
    if (a === b + 1) {
      clearInterval(interval);
    }
  }, 1000);
};
numInterval(5, 15);
