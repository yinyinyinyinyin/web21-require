//引入配置文件
require.config({
	baseUrl:'./js',
	paths:{
		ModuleA:'modules/ModuleA',
		ModuleB:'modules/ModuleB',
	
	}
})

//需要引入空的依赖列表
//导入模块的顺序和模块执行的顺序是不一致的，
//./modules/ModuleA 和a 是一一对应的关系，即给该模块起的简单版别名
require(['ModuleA','ModuleB',],function (a,b){
	console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
	//可以获取 模块A 的feibona方法
	console.log(a.feibona(8));
	//使用的绝对路径
	
})