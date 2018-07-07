# wangpq-es6-async-await-promise-demo
> 使用gulp简单搭建了一个支持es6的环境，弄了些es6中async/await、Promise的具体实例，给初学者一个参考


#怎样运行示例?

下载本项目到本地，cd进入此项目文件夹根目录，
```bash
cd wangpq-inherit-demo
```

**然后下载依赖到本地**
```bash
npm install  
```

**在本地服务器上运行**
```bash
gulp
```
然后打开浏览器，输入 http://localhost:8080/async_await.html ,即可看到内容。

***


好多还没有使用过es6或者刚开始学习使用es6的前端开发者，可能都会遇到这样的问题，就是都听说了es6中可以使用fetch、promise、async、await来进行异步接口的数据处理，可实际该怎么写，却犯了难，不知从何着手，今天啊我我也自个使用gulp搭了个环境，做了几个这样的示例。

你见到的代码中src是源代码，dest是经过babel处理过未压缩可运行的代码。其他的我不多说了，我来讲讲怎么这几个属性的使用实例吧。



# fetch

fetch，说白了，就是XMLHttpRequest的一种替代方案，不过到现在为止，fetch的支持性还不是很好，但是在谷歌浏览器中已经支持了fetch。fetch挂在在BOM中，可以直接在谷歌浏览器中使用。关于fetch的支兼容性在这里我们不讨论，我们只说说它的使用方法，做了一个常用的示例，获取接口的数据，别的不多说。

```bash
fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
  method: 'GET',
  headers: new Headers({
    'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
  })
})
.then((res)=>{
  return res.json() // 返回一个Promise，可以解析成JSON
})
.then((res)=>{
  console.log("fetch获取ajax数据成功了")
  console.log(res);
})
.catch((res)=>{
  console.log("获取ajax数据失败了")
})
```


# promise

Promise是异步编程的一种解决方案，比传统的解决方案–回调函数和事件－－更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了语法，原生提供了Promise。

我们在前端开发的过程中，很多时候会碰着这样的情况，有两个或者多个异步请求的数据，有时候我们需要它们都从服务端获取到以后我们再进行数据操作，有时候它们还有先后，必须某一个执行完后才能执行下一个。遇着这样的情形，以前我们可能更多的使用常规方式,也就是嵌套，在一个ajax里面再嵌套另一个，或者使用jQuery提供给我们的$.when再或者使用第三方的一些方案。总之，就是麻烦。现在好了，es6的promise来了，解决了我们的这些麻烦。

## Promise.all

看着这名Promise.all,我们就能猜想到它的意思，就是如果有多个异步数据的请求，我啊，就可以用它实现这几个哥们都完成后的数据处理操作。

看看下面这个从大多数网上找来的示例

```bash
let p1 = new Promise((resolve, reject) => {
  resolve('p1 success')
})

let p2 = new Promise((resolve, reject) => {
  resolve('p2 success')
})

Promise.all([p1, p2]).then((result) => {
  console.log(result)               //['p1 success', 'p2 success']
}).catch((error) => {
  console.log(error)
})
```
看完后可能一部分朋友懂该怎么做了，可还有部分朋友还在懵逼，不急，我们来先解释几个东东。

Promise对象有三种状态

pending：进行中

fulfilled :已经成功

rejected 已经失败

Promise对象的状态改变，只有两种可能：

从pending变为fulfilled

从pending变为rejected。

这两种情况只要发生，状态就凝固了，不会再变了，这时就称为resolved（已定型）

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去； 

reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise 实例生成以后，可以用then 方法分别指定resolved状态和rejected状态的回调函数。

好了，说了这几个，我们来看看下面的代码

```bash
let ajax_1 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    fetch('https://cnodejs.org/api/v1/user/alsotang', { 
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' 
      })
    })
    .then((res)=>{
      return res.json() 
    })
    .then((res)=>{
      console.log("获取ajax_1数据成功了")
      resolve(res)
    })
    .catch((res)=>{
      reject("获取ajax_1数据失败了");
    })
  })
};

let ajax_2 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      })
    })
    .then((res)=>{
      return res.json() // 返回一个Promise，可以解析成JSON
    })
    .then((res)=>{
      console.log("获取ajax_2数据成功了")
      resolve(res)
    })
    .catch((res)=>{
      reject("获取ajax_2数据失败了")
    })
  })
};

Promise.all([ajax_1(), ajax_2()]).then((result) => {
  console.log("获取两个ajax数据组成的数组成功了")
  console.log(result)   // 这里的 result就是两ajax都完成后得到的数据，这是一个 ajax_1和 ajax_2两个异步请求获取到的数据顺序组成的一个数组
}).catch((error) => {
  console.log("获取两个ajax数据组成的数组失败了")
  console.log(error)
})
```
看到这，相信大家就应该知道如果遇着真实项目的时候该怎么用 Promise.all 处理多个异步数据请求了吧。


## Promise.then

Promise.then解决了我们刚才讲的几个异步请求需要先后顺序的问题。

打个比方，比如开发的一个页面，未登录和登陆后的显示内容是不同的，而这些数据，后端给我们的都是异步接口数据，我们就得先判断是否用户登录了，然后再根据这个结果获取另一个异步接口的数据，再根据这些数据展示在页面中。
Promise.then就为我们提供了这样的方法，让我们在书写代码的时候很开心，不用担心多重嵌套带来的麻烦啦。

请看下面的代码：

```bash
let ajax_1 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    fetch('https://cnodejs.org/api/v1/user/alsotang', { 
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' 
      })
    })
    .then((res)=>{
      return res.json() 
    })
    .then((res)=>{
      resolve(res);
    })      
    .catch((res)=>{
      reject("获取ajax_1数据失败了")
    })
  })
 };

 let ajax_2 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
      fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
        method: 'GET',
        headers: new Headers({
          'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
        })
      })
      .then((res)=>{
        return res.json() // 返回一个Promise，可以解析成JSON
      })
      .then((res)=>{
        //console.log(res) // 获取JSON数据
        resolve(res);
      })      
      .catch((res)=>{
        reject("获取ajax_2数据失败了")
      })
  })
 };

ajax_1().then(function(data_1){
  var res = data_1; 
  console.log(res)
  if (res.data && res.data.loginname!=="" ) {
    console.log("准备执行ajax_2")
    return ajax_2()
  }
}).then(function(data_2){
  console.log(data_2)
})

```

当然，Promise.then这种写法也是可以用 Promise.all 实现的，只需要在Promise.all中获取的数组中取出数据进行逻辑处理就可以啦，不多说啦。

## Promise.race

顾名思义，Promse.race就是赛跑的意思，就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。这个功能貌似没找到用的地方。

```bash
 let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success_p1');
  },1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success_p2');
    reject('failed');
  }, 600)
})

console.log("---promise_race demo---");
Promise.race([p1, p2]).then((result) => {
  console.log(result)  //result的值 'success_p2'
}).catch((error) => {
  console.log(error)  
})
```


## async / await

任意一个名称都是有意义的，先从字面意思来理解。async 是“异步”的简写，而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。

使用 async / await, 搭配 promise, 可以通过编写形似同步的代码来处理异步流程, 提高代码的简洁性和可读性.

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用.


请看下边的代码

```bash
import $ from "./jquery"

let ajax_1 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    $.ajax({
      url : 'https://cnodejs.org/api/v1/user/alsotang',
      type : "get",
      success : function(res){ 
        console.log("获取ajax_1数据成功了")
        resolve(res)
      },
      error : function(res){
        reject("获取ajax_1数据失败了");
      }
    })
  })
};

let ajax_2 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
      fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
        method: 'GET',
        headers: new Headers({
          'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
        })
      })
      .then((res)=>{
        return res.json() // 返回一个Promise，可以解析成JSON
      })
      .then((res)=>{
        console.log("获取ajax_2数据成功了")
        resolve(res)
      })
      .catch((res)=>{
        reject("获取ajax_2数据失败了")
      })
  })
};

async function twoAjax() {
  let res_1 = await ajax_1();
  let res_2 = await ajax_2();
  console.log("获取的两个ajax的数据");
  console.log([res_1,res_2]);
}

console.log("---async_await demo---");
twoAjax();
```


因为 async 函数返回一个 Promise 对象，所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。所以下面这个示例完全可以正确运行的。

```bash
function doSomething() {
    return "dosomething";
}

async function doAsync() {
    return Promise.resolve("hello, dear async ");
}

async function test() {
    const v1 = await doSomething();
    const v2 = await doAsync();
    console.log(v1, v2);
}

test();
```

再继续唠叨一下，await 等到了要等的，然后呢

await 等到了它要等的东西，一个 Promise 对象，或者其它值，然后呢？我不得不先说，await 是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西。

如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。


看到上面的阻塞一词，有点心慌了吧……放心，这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

