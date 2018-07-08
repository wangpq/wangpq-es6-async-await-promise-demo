
import {Animal,GztUtils,Circle} from "./utils"
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


class Dog extends Animal{
  constructor(name,color){
    console.log("==constructor dog");
    super();
    this.name = name;
    this.color = color;
　  this.variety = "犬科";
  }
  sayHello (){
    return "我是"+this.name+",肤色为"+this.color+","+　this.variety+"动物";
  }
}

document.getElementById("demo").innerHTML=new Dog("大宝","黄色").say() +"---"+new Dog("大宝","黄色").sayHello();

document.getElementById("btnAdd").onclick=function(){
  let v1=document.getElementById("addOne").value;
  let v2=document.getElementById("addTwo").value;
  if(!isNaN(v1) && !isNaN(v2)){
    $("#demo_2").html(GztUtils.add(parseInt(v1),parseInt(v2)));
  }else{
    $("#demo_2").html("输入数据格式有误");
  }
}

document.getElementById("circle").onkeyup=function(){ 
   document.getElementById("demo_3").innerHTML=(new Circle(parseInt(this.value)).getArea()).toFixed(2) ;
}


