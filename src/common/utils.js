export function debounce(func , delay) {
  let timer = null
  return function() {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context , args);
    },delay)
  }

  // 维护一个 timer
  // let timer = null;
  // return function() {
  //   // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
  //   let context = this;
  //   let args = arguments;
  //   clearTimeout(timer);
  //   timer = setTimeout(function() {
  //     func.apply(context, args);
  //   }, delay);
  // }
}
