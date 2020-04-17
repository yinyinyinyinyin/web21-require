//引入配置文件
require.config({
	baseUrl:'./js',
	paths:{
		jquery:'libs/jquery',
		jquerytest:'libs/jquerytest',
		privateJquery:'libs/private-jquery',
		ModuleA:'modules/ModuleA',	
	},
	map:{
		//所有模块，使用jquery都指向privateJquery
		"*":{"jquery":"privateJquery"},
		//privateJquery 使用的jquery指向jquery
		"privateJquery":{"jquery":"jquery"}
	}
})

//需要引入空的依赖列表
//导入模块的顺序和模块执行的顺序是不一致的，
//./modules/ModuleA 和a 是一一对应的关系，即给该模块起的简单版别名
//如果，导入的两个库都有同名的$,提供一个方法来取消掉$符号的占用
require(['jquery','ModuleA','jquerytest'],function (jq,a,jqt){
	console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
	//console.log(jq);
	console.log($);//obj
	console.log(jq);//jquery
	console.log(jqt);//obj
	//这里给$重新赋值，导致，后面不能使用$,造成了全局污染
	//var $ = 123;
	//console.log($);
	//$.func();//这一句会报错
	//jqt.func();//这种方法调用就可以
	
	//调用jquery的noConflict函数
	// jq = jq.noConflict();
	// console.log($);
	//console.log(jQuery);
	
})