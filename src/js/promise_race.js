/**************************
 * Promise.race的使用
 * 顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
 *************************/

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

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  
})

