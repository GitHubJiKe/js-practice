// 作用域链(Scope chain)

// var i = 0;
// for (; i < 10; i++) {
//   console.log(i);
// }
// console.log('====', i);


// for (var j = 0; j < 10; j++) {
//   console.log(j);
// }
// console.log('====', j);

//闭包 = 函数 + 函数能够访问的自由变量
//自由变量：是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。
var k = 0;
for (; k < 5;) {
  void function (k) {
    setTimeout(() => {
      console.log(k);
    }, 1000);
  }(k)
  k++;
}

