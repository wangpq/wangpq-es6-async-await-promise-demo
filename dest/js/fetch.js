"use strict"; // 获取接口数据
/*
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
*/



// 通过fetch获取页面内容
fetch("../html/temp/demo.html", {
  method: 'GET' }).

then(function (res) {
  return res.text();
}).
then(function (res) {
  console.log(res);
});