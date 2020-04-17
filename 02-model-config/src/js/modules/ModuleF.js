
//参数：模块名，  引入的其他依赖，     执行的函数
define("msg",['ModuleA','ModuleB'],function(a,b){
	console.log("我是模块f中调用的模块A：",a.info);
	console.log("我是模块f");
	
})