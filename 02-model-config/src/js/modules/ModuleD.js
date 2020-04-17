define(['ModuleA','ModuleB'],function(a,b){
	console.log("我是模块D中调用的模块A：",a.info);
	console.log("我是模块D");
	
})