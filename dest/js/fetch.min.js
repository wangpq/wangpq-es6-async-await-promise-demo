(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'; // 获取接口数据
fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
  method: 'GET',
  headers: new Headers({
    'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
  }) }).

then(function (res) {
  return res.json(); // 返回一个Promise，可以解析成JSON
}).
then(function (res) {
  console.log("fetch获取ajax数据成功了");
  console.log(res);
}).
catch(function (res) {
  console.log("获取ajax数据失败了");
});
},{}]},{},[1]);
