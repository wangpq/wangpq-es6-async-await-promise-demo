/*
let ajax_1 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
   //模拟接口调用
   setTimeout(function () {
    resolve({"status" : true});
   }, 500);
  })
 };

 let ajax_2 = function () {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
   //模拟接口调用
   setTimeout(function () {
    resolve('ajax_2成功执行');
   }, 1000);
  })
 };
  
 ajax_1().then(function(data){
  var val = data; 
  console.log(val)
  if (val.status) {
   console.log(111111111111)
   return ajax_2()
  }
 }).then(function(data1){
  console.log(data1)
 })
*/

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
  })
 };
  
console.log("---promise_then demo---");
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


