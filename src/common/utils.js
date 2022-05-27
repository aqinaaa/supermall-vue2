 /** 
  * 事件监听相关的方法
  */

 export function debounce(func, delay) {
     let timer = null //让timer为空

     return function(...args) { //执行函数
         if (timer) clearTimeout(timer) //如果新传入了不为空的timer，则清空之前的timer

         timer = setTimeout(() => { //重新赋值timer为一个倒计时的箭头函数
             func.apply(this, args)
         }, delay)
     }
 }