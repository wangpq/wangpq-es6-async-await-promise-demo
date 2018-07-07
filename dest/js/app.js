"use strict";



























































var _jquery = require("./jquery");var _jquery2 = _interopRequireDefault(_jquery);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ajax_1 = function ajax_1() {
  //返回一个Promise对象
  return new Promise(function (resolve, reject) {
    _jquery2.default.ajax({
      url: 'https://cnodejs.org/api/v1/user/alsotang',
      type: "get",
      success: function success(res) {
        console.log("获取ajax_1数据成功了1111");
        resolve(res);
      },
      error: function error(res) {
        reject("获取ajax_1数据失败了");
      } });

  });
}; /*
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
   */ /*
      
      
      
      
      
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
      */var ajax_2 = function ajax_2() {//返回一个Promise对象
  return new Promise(function (resolve, reject) {fetch('https://cnodejs.org/api/v1/topics', { // 在URL中写上传递的参数
      method: 'GET', headers: new Headers({ 'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      }) }).then(function (res) {return res.json(); // 返回一个Promise，可以解析成JSON
    }).then(function (res) {console.log("获取ajax_2数据成功了");resolve(res);}).catch(function (res) {reject("获取ajax_2数据失败了");});});};async function twoAjax() {var res_1 = await ajax_1();var res_2 = await ajax_2();console.log("获取的两个ajax的数据");console.log([res_1, res_2]);}twoAjax(); /*
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
                                                                                                                                                                                                                                                                                    */ /*
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
                                                                                                                                                                                                                                                                                       */ /*
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
                                                                                                                                                                                                                                                                                          */ /*
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
                                                                                                                                                                                                                                                                                               console.log(result)       
                                                                                                                                                                                                                                                                                             }).catch((error) => {
                                                                                                                                                                                                                                                                                               console.log("获取两个ajax数据组成的数组失败了")
                                                                                                                                                                                                                                                                                               console.log(error)
                                                                                                                                                                                                                                                                                             })
                                                                                                                                                                                                                                                                                             */ /*
                                                                                                                                                                                                                                                                                                需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。
                                                                                                                                                                                                                                                                                                */ /*
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
                                                                                                                                                                                                                                                                                                      */





/**************************
                                                                                                                                                                                                                                                                                                          * Promise.race的使用
                                                                                                                                                                                                                                                                                                          * 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
                                                                                                                                                                                                                                                                                                          *************************/
/*
                                                                                                                                                                                                                                                                                                                                      let p1 = new Promise((resolve, reject) => {
                                                                                                                                                                                                                                                                                                                                       setTimeout(() => {
                                                                                                                                                                                                                                                                                                                                         resolve('success_p1');
                                                                                                                                                                                                                                                                                                                                       },1000)
                                                                                                                                                                                                                                                                                                                                     })
                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                     let p2 = new Promise((resolve, reject) => {
                                                                                                                                                                                                                                                                                                                                       setTimeout(() => {
                                                                                                                                                                                                                                                                                                                                         resolve('success_p2');
                                                                                                                                                                                                                                                                                                                                         reject('failed');
                                                                                                                                                                                                                                                                                                                                       }, 800)
                                                                                                                                                                                                                                                                                                                                     })
                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                     Promise.race([p1, p2]).then((result) => {
                                                                                                                                                                                                                                                                                                                                       console.log(result)
                                                                                                                                                                                                                                                                                                                                     }).catch((error) => {
                                                                                                                                                                                                                                                                                                                                       console.log(error)  
                                                                                                                                                                                                                                                                                                                                     })
                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                     */