//需要导入依赖列表
//可以使用 require引入模块

//require有两个参数
//第一个参数  ，是一个数组，可以填写 将要引入的模块地址
//第二个参数一个函数，是 index.html 指向 main所要运行的函数
//下面函数中的a,b分别是模块的别名

require(['./modules/ModuleA','./modules/ModuleB'],function(a,b){
	console.log("模块化的主入口文件运行了");
	
})