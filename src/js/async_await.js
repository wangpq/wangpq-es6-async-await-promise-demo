/*
function sleep(time, param) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(param);
          reject('want to sleep~'+param);
      }, time);
  })
}

async function test() {
  let result1 = await sleep(2000, '_req01_');
  let result2 = await sleep(1000, '_req02_' + result1);
  let result3 = await sleep(500, '_req03_' + result2);
  let totalRes=`
    ${result3}
    ${result2}
    ${result1}
  `
  console.log(totalRes);
}

test();
*/




/*
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
*/

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



