// for 循环是一个同步执行的过程
// 每次循环都会执行setTimeout方法，往Event loop queue(事件循环队列) 里推进一个匿名函数
// 当 for 循环执行完毕之后，call stack (调用堆栈)，再一个个的执行事件循环队列里的匿名函数进行执行
// 由于{} 作用域的问题，导致每个匿名函数绑定的都是 i 这个变量 ，i 变量在内存中是唯一存在的，所以，当for循环执行完毕之后，
// i的值已经被修改为了10，因此无论有多少个来自实践循环队列的匿名函数执行进行打印 i ,i的值始终都是 10；


//每次打印10
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// let声明的变量只在其声明的块或子块中可用，这一点，与var相似。
// 二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。 -- from MDN
//由于let 声明的变量只在其块或者子块中起作用，也就可以理解为，这种for循环里会执行10次的let i ;
// 并且每一个i 都有各自的内存空间地址，每个i都有其不同的值，且被绑定到了10个分别不同的匿名函数中，
//因此最终当事件循环队列里的匿名函数出队列时（先进先出），打印的结果也就是其绑定的i的值：0，1，2……
//打印0 - 9
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//打印0 - 9
for (var i = 0; i < 10; i++) {
  function a(j) {
    setTimeout(() => {
      console.log(j);
    }, 1000)
  }
  a(i);
}

//打印0 - 9
for (var i = 0; i < 10; i++) {
  void function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000)
  }(i);
}

//打印0 - 9
for (var i = 0; i < 10; i++) {
  let a = (j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000)
  }
  a(i);
}