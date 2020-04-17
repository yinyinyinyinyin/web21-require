//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery',//引入的网络模块
		ModuleCC:'modules/ModuleC',
		ModuleD:'modules/ModuleD',
		ModuleE:'modules/ModuleE',
		msg:'modules/ModuleF'  //如果定义了模块名，引入时必须按模块名来引入
		
	}
})

//需要导入依赖列表
//可以使用 require引入模块

//require有两个参数
//第一个参数  ，是一个数组，可以填写 将要引入的模块地址
//第二个参数一个函数，是 index.html 指向 main所要运行的函数
//下面函数中的a,b分别是模块的别名
//注意：执行后，A模块或B模块的顺序是不确定的，因为是异步加载
require(['ModuleA','ModuleB','jquery','ModuleCC','ModuleD','ModuleE','msg'],function(a,b,$,c,d,e,m){
	console.log("模块化的主入口文件运行了");
	//使用了A模块中的属性和方法
	console.log(a.info);
	console.log(a.fnA());
	
	//使用B模块中的属性和方法
	console.log(b.info);
	console.log(b.fnB());
	console.log($);
	
	//使用C模块中的对象
	console.log(c.color);
})