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
/*
 * 时间戳格式转正常时间格式显示
 */
// export function formatDate(date, fmt) {
//   if (/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   let o = {
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds()
//   };
//   for (let k in o) {
//     if (new RegExp(`(${k})`).test(fmt)) {
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//     }
//   }
//   return fmt;
// };
// function padLeftZero (str) {
//   return ('00' + str).substr(str.length);
// };

/*
 * 时间戳格式转正常时间格式显示
 */



/**参数number为毫秒时间戳，format为需要转换成的日期格式
 * @param {Object} number
 * @param {Object} format
 * 使用formatTime(1545903266795, 'Y年M月D日 h:m:s')或者formatTime(1545903266795, 'Y-M-D h:m:s')即可
 */
export function formatTime (number, format) {
  let time = new Date(number)
  let newArr = []
  let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
  newArr.push(time.getFullYear())
  newArr.push(formatNumber(time.getMonth() + 1))
  newArr.push(formatNumber(time.getDate()))

  newArr.push(formatNumber(time.getHours()))
  newArr.push(formatNumber(time.getMinutes()))
  newArr.push(formatNumber(time.getSeconds()))

  for (let i in newArr) {
    format = format.replace(formatArr[i], newArr[i])
  }
  return format;
}

/**格式化日期，如月、日、时、分、秒保证为2位数
 * @param {Object} n
 */
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n;
}
// var startTime = data.data.rows[i].startTime;//这是从后台传来的时间戳格式的
// var startTime1 = formatTime(startTime,'Y年M月D日 h:m:s');
// var startTime2 = formatTime(startTime,'Y-M-D h:m:s');
// alert(startTime1+'————'+startTime2);
