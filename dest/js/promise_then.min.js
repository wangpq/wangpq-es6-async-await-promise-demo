(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'; /*
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
      //console.log(res) // 获取JSON数据
      resolve(res);
    }).
    catch(function (res) {
      reject("获取ajax_2数据失败了");
    });
  });
};

console.log("---promise_then demo---");
ajax_1().then(function (data_1) {
  var res = data_1;
  console.log(res);
  if (res.data && res.data.loginname !== "") {
    console.log("准备执行ajax_2");
    return ajax_2();
  }
}).then(function (data_2) {
  console.log(data_2);
});
},{}]},{},[1]);
