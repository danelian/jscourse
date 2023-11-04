// ============= 6.4. Самовызывающаяся функция iife ===============

(function () {
  console.log('Самовызывающаяся функция');
})();


let res = (function (a, b) {
  console.log(a + b);
  return a + b;
})(10, 15);

console.log(res);