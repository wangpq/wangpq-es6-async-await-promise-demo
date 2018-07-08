(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'; /*
              let p1 =new Promise(function(resolve,reject){
                resolve(JSON.stringify({"AA":"11"}));
               });
               let p2 = new Promise(function(resolve,reject){
                resolve(JSON.stringify({"BB":"22"}));
               });
               let p3 = new Promise(function(resolve,reject){
                resolve("33");
               });
               Promise.all([p1, p2, p3]).then(function (results) {
                console.log('---success---:');
                console.log(results);
               }).catch(function(r){
                console.log("error");
                console.log(r);
               });
               */



/*
                  let p1 = new Promise((resolve, reject) => {
                    resolve('成功了')
                  })
                  
                  let p2 = new Promise((resolve, reject) => {
                    resolve('success')
                  })
                  
                  let p3 = Promise.reject('执行多个ajax失败了')
                  
                  Promise.all([p1, p2]).then((result) => {
                    console.log(result)               //['成功了', 'success']
                  }).catch((error) => {
                    console.log(error)
                  })
                  
                  Promise.all([p1,p3,p2]).then((result) => {
                    console.log(result)
                  }).catch((error) => {
                    console.log(error)      // 失败了，打出 '失败'
                  })
                  */



/*
                     let wake = (time) => {
                       return new Promise((resolve, reject) => {
                         setTimeout(() => {
                           resolve(`${time / 1000}秒后醒来`)
                         }, time)
                       })
                     }
                     
                     let p1 = wake(3000)
                     let p2 = wake(2000)
                     
                     Promise.all([p1, p2]).then((result) => {
                       console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
                     }).catch((error) => {
                       console.log(error)
                     })
                     */


var ajax_1 = function ajax_1() {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    fetch('https://cnodejs.org/api/v1/user/alsotang', {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' }) }).


    then(function (res) {
      return res.json();
    }).
    then(function (res) {
      console.log("获取ajax_1数据成功了");
      resolve(res);
    }).
    catch(function (res) {
      reject("获取ajax_1数据失败了");
    });
  });
};

var ajax_2 = function ajax_2() {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      }) }).

    then(function (res) {
      return res.json(); // 返回一个Promise，可以解析成JSON
    }).
    then(function (res) {
      console.log("获取ajax_2数据成功了");
      resolve(res);
    }).
    catch(function (res) {
      reject("获取ajax_2数据失败了");
    });
  });
};

console.log("---Promise.all demo---");
Promise.all([ajax_1(), ajax_2()]).then(function (result) {
  console.log("获取两个ajax数据组成的数组成功了");
  console.log(result);
}).catch(function (error) {
  console.log("获取两个ajax数据组成的数组失败了");
  console.log(error);
});



/*
    需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。
    */
},{}]},{},[1]);
