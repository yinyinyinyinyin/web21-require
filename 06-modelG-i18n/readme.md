## 模块化
	- common js 需要依赖于nodejs平台实现
	- amd 需要依赖于require.js
	- cmd 需要依赖于sea.js
## 下载 require.js
	- 在 bootcdn上下载
## 本地创建require项目
	- 创建index.html,在文件中引入 require.js，并使用data-main指定入口文件
	- 创建main.js ,引入空模块
	- require([],function (){
	console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
	})
	- 创建 模块文件 modules/ModuleA.js,modules/ModuleB.js,使用define定义模块内容
	- 将模块引入main.js
		- require(['./modules/ModuleA','./modules/ModuleB'],function (a,b){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
		})
	- 在模块A中定义对象，及对象的方法
		var obj = {
				 feibona:function (n){
					 if(n ==2 || n == 1){
						 return 1;
						 
					 }else if(n>2){
						 return this.feibona(n-1)+this.feibona(n-2);
					 }
				 }
		}
		return obj;
	- 在 main.js 中引入
		- //可以获取 模块A 的feibona方法
			console.log(a.feibona(8));
			
			
## 封装获取数据的模块		
	- 封装fetch的模块
	- 在main.js汇总引入并使用

## 写require的配置文件
	- //引入配置文件
		require.config({
			baseUrl:'./js',
			paths:{
				ModuleA:'modules/ModuleA',
				ModuleB:'modules/ModuleB',
				fetch:'modules/fetch'
			}
		})
		require(['ModuleA','ModuleB','fetch'],function (a,b,f){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
			console.log(a.feibona(8));
			f.get('/require/modelB/src/js/moke/moke.json').then((res)=>{
				console.log(res);
			})
		})

## 自定义模块和依赖
	- 1.简单键值对
		- 创建 ModuleC.js
		- 添加内容定义简单对象
			define({
				color:'red'
			})
		- 在 main.js 中引入该模块
			- ModuleC:'modules/ModuleC',
		- 在 ModuleB中使用该模块
			- define(['ModuleC'],function(c){
				 console.log('我是模块B');
				 console.log(c.color);
			});
	- 2.通过函数返回的方式
		
	- 3.带依赖的函数定义
	
	- 4.就近定义的方式
		- 创建 ModuleD.js
		- define(function(require,exports,modules){
			//就近加载的语法
			var A= require("ModuleA");
			var B= require("ModuleB");
			console.log('A=',A);
			console.log('B=',B);
		})
		- 在 main.js 中引入该模块
			- ModuleD:'modules/ModuleD',
		- 在 main.js 中使用
		- require(['ModuleA','ModuleB','fetch','ModuleD'],function (a,b,f,d)
	- 5. 自定义命名模块
		- 这种定义了名字的模块，在引入main.js的配置时，名字一定要和模块名一致
## jquery加载
	- 1.在bootcdn上下载jquery，查看是否是amd模式
	- 2.新创建项目 modelD-jquery
	- 3.将 jquery放到src/js/libs/jquery.js这个位置
	- 4.写 main.js
		-//引入配置文件
		require.config({
			baseUrl:'./js',
			paths:{
				jquery:'libs/jquery'
			}
		})
		//需要引入空的依赖列表
		//导入模块的顺序和模块执行的顺序是不一致的，
		//./modules/ModuleA 和a 是一一对应的关系，即给该模块起的简单版别名
		require(['jquery'],function (jq){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
			console.log(jq);
			console.log($);
			console.log(jQuery);
		})
	-5. 创建ModuleA，并将ModuleA添加到main的配置中
		define("ModuleA",[],function(){
			console.log("我是模块A");	
		});
		require(['jquery'],function (jq){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
			console.log(jq);
			console.log($);
			var $ = 123;
			console.log($);//这里，$重新赋值，导致全局污染，也就是$不再是原来的意思
			//console.log(jQuery);
		})
	-6. 创建jquerytest.js 配置到main.js中
		define('jquerytest',[],function(){
			var obj = {
				func:function(){
					console.log('我是定义的jquerytest的函数');
				}
			}
			window.$=obj;
			return obj;
		});
		
		
		//这里，jquery提供了一种方式，导致，jquery的$是最后加载的,所以，我们调用 $.func();会报错
		require(['jquery','ModuleA','jquerytest'],function (jq,a,jqt){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
			$.func();
			jqt.func();
			//console.log(jQuery);
			
		})
		//注：
	-7. 命名冲突的解决办法，还有一种方法，导入的两个库都有同名的$,提供一个方法来取消掉$符号的占用，释放使用权
		//a. noConflict释放jquery的使用权，来解决变量名定义冲突的问题，现场还原
		jQuery.noConflict = function( deep ) {
			if ( window.$ === jQuery ) {
				window.$ = _$;
			}
			if ( deep && window.jQuery === jQuery ) {
				window.jQuery = _jQuery;
			}
			return jQuery;
		};
		
		//在jquery的10573和10591设置断点，在jquerytest的2和8设置断点
		//在main.js中调用jquery的noConflict ，释放jquery的$使用权
		jq = jq.noConflict();
		console.log($);
		//b. 如果不想每次调用jquery的这个函数
		创建一个新的模块，private-jquery.js
		define(['jquery'],function(jq){
			return jq.noConflict();//释放jquery的使用权
		});
		将private-jquery 引入到main
		privateJquery:'libs/private-jquery',
		
		require(['privateJquery','ModuleA','jquerytest'],function (pjq,a,jqt){
			console.log("我是入口模块，所有程序必须经过我");//先加载模块在执行函数的内容
			console.log($);//obj
			console.log(pjq);//jquery
			console.log(jqt);//obj
		})
	-8. 使用map配置参数，加载费冲突的jquery
		map:{
			//所有模块，使用jquery都指向privateJquery
			"*":{"jquery":"privateJquery"},
			//privateJquery 使用的jquery指向jquery
			"privateJquery":{"jquery":"jquery"}
		}
		这样写之后，再使用jquery都会指向 privateJquery
		并且，自己写的封装模块需要改进
		define('jquerytest',[],function(){
			console.log('我是定义的jquerytest模块');
			var _$ = window.$;
			var obj = {
				func:function(){
					console.log('我是定义的jquerytest的函数');
				},
				noConflict:function(){//释放$
					if(window.$ == this){
						window.$ = _$;
					}
				}
			}
			window.$=obj;
			return obj;
		});
	
## 加载非规范模块
	-1. 创建想项目 modelE-shim
	-2. 创建新的非规范化模块
	(function() {
		console.log($);
	var person = "sheldon";
	var D = {
	info: " this is D module",
	fnD: function() {
	// 依赖 jQuery
	return "#" + $.trim(person + " say:" + this.info) + "#"; }
	};
	window.D = D; //调用该模块的全局对象
	})();
	-3.将该模块配置到main.js
	//引入非AMD规范的模块
	shim: {
	'ModuleD': {
		// Array，指定该模块需要依赖的其他模块，会先于当前模块加载
		deps: ['jquery'],//属性可以为当前模块指定依赖的或先于加载的其他模块
		exports: 'D' //调用该模块的全局对象值
		} 
	}
	
	require(['jquery','ModuleD'],function ($,d){
		console.info("MAIN: " + d.fnD());
	})
	
## require插件的使用
	-1. 将插件线拷贝过来
	-2. 创建项目modelF-plugin
	-3. 添加main.js,require.js,
	添加libs/easy.templatejs.js,libs/text.js
	添加modules/HOME/home.html,modules/HOME/home.js
	将插件和模块配置到main.js
	require.config({
		baseUrl:'./js',
		paths:{
			text:'libs/text',
			Et:'libs/easy.templatejs',
			home:'modules/Home/home'
		}
	})
	require(['home','Et'],function (home,Et){
		console.log("我是入口模块，所有程序必须经过我");
		var name = "tiantian";
		var rs = Et.template(`<h1>{-catName}</h1>`,{catName:name});
		console.log("rs:",rs);
	})
	define(['text!./home.html'],function(homeHTML){
		console.log('home 模块');
		console.log(homeHTML);
		document.body.innerHTML = homeHTML;
	});
	
	-4. 修改home.html,home.js
	define(['text!./home.html','Et'],function(homeHTML,Et){
		console.log('home 模块');
		//数据
		var books = [
			{"name":"仙剑奇侠传"},
			{"name":"圣墟"},
			{"name":"倚天屠龙记"}
		];
		var rs = Et.template(homeHTML,{books});
		document.body.innerHTML = rs;
	});
	<ul>
		%{
			for(var i = 0;i<books.length;i++){
				var book = books[i];
		}%
		<li>{-book.name}</li>
		%{
			}
			
		}%
	</ul>
	
## 国际化
	-1. 什么是国际化
	根据不同的语言环境，使用不同的网站资源，或不同的文字显示内容
	-2. require实现国际化的插件是i18n
	-3. 创建新项目 modelG-i18n
	添加插件i18n,添加 nls/color.js
	define({
		"root":{
			"red":"red"
		}
	})
	-4. 将插件在main.js中配置
	require.config({
		baseUrl:'./js',
		paths:{
			i18n:'libs/i18n'
		}
	})
	require(['i18n!nls/color'],function(c){
		console.log('我是程序入口');
		console.info(c.red);
	});
	-4.浏览器语言切换对网站的影响
	创建nls/zh-cn/color.js
	define({
			"red":"红色"
	})
	修改nls/color.js
	define({
		"root":{
			"red":"red"
		},
		"zh-cn":true
	})
	点击谷歌浏览器的右上角，选择设置，切换语言集查看变化
	--注：可以使用sasa官网，给大家演示一下，语言集
	
	
	
	
	
	
	
	
		
		
	