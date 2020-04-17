//引入配置文件
require.config({
	baseUrl:'./js',
	paths:{
		jquery:'libs/jquery',
		ModuleA:'modules/ModuleA',	
		ModuleD:'modules/ModuleD'
	},
	//引入非AMD规范的模块
	shim: {
	'ModuleD': {
		// Array，指定该模块需要依赖的其他模块，会先于当前模块加载
		deps: ['jquery'],//属性可以为当前模块指定依赖的或先于加载的其他模块
		exports: 'D' //调用该模块的全局对象值
		} 
	}
})

//需要引入空的依赖列表
//导入模块的顺序和模块执行的顺序是不一致的，
//./modules/ModuleA 和a 是一一对应的关系，即给该模块起的简单版别名
//如果，导入的两个库都有同名的$,提供一个方法来取消掉$符号的占用
require(['jquery','ModuleD'],function ($,d){
	console.log($);
	console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
	console.info("MAIN: " + d.fnD());
	
})