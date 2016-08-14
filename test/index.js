'use strict';

function xx (a, b, c) {
  return a + b + c;
}

function g (...args) {
  console.log(xx(args));
}

g(10, 20, 30);
// action就可以更新数据了
/**
  当需要大量数据用来构造map的时候，是以二维数组形式进行传参的，
  键值对都是以一个包含两个元素的数组进行匹配的
  是一个键值对或者一个迭代器

**/
// let map = new Map();
// map.set('name', '挖掘机')

// set 返回的是一个填充key-value的map
// delete 返回删除是否成功
// values 返回一个所有value的iterator
// keys 返回一个所有key的iterator
// items 返回所有的key value
// for of 解决了for in会遍历到对象的原型的
// enumerable
// configurable


// let map = new Map([ ['name', 'zwb'], [ 'age', 21 ], [ 'sex', '男' ] ]);
//
// // for in 会遍历原型对象中的自定义方法
// // for of 遍历键值对而不是数组
// // 键值对就是数组形式
// for (let [key, value] of map) {
//   console.log(key + ':' + value);
// }

// view dispatch action通知store的reducer更新state,state的更新直接呈现到view上

/*
  开发流程
  1、定义各种reducer
  2、通过combineReducers方法组合reducer
  3、通过createStore方法创建管理和维护整个应用状态的store
  4、定义监听state改变的event handler
  5、dispatch action
  6、

  bindActionCreators方法就是将actionCrator和dispatch连接接起来

  js 函数式编程主要是定义不可变的数据和pure函数
  函数式编程主要减少代码产生的副作用

  不可变的数据：变量的值不可变，变量一旦定义，值永远不会发生变化
  定义简单变量，字符串、number、boolean值不会变化
  如果是对象、数组等其值是可变化的
  数组中包括变动方法和非变动方法
  变动方法：push pop shift unshift splice
  非变动方法：concat、slice、map、filter、reduce

  pure函数
    pure函数不会改变程序的状态，比如改变其他作用域的变量的值，pure的输出，仅仅取决于输入，只要输入值不变，输出也是不变

  高阶函数
    将函数当做参数传入，并且返回新函数，通过闭包的特性，返回的新函数可以记住生成函数的遍历



*/

/**function g () {}**/
