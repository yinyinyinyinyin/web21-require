### 模块化
## 1.  模块化分类
	--1.1 commonjs 需要依赖于nodejs平台来实现的，面试的是服务器端程序
	--1.2 amd  依赖前置的模块化方式  特点：先加载依赖，不管你需要什么时候使用该依赖下面的函数或属性  ，实现：require.js
	--1.3 cmd  依赖就近的模块化方式 特点:使用该模块时才进行模块加载  ，实现：sea.js
	
## 2. 引入 require.js
	--2.1 将require.js拷贝到   src/js/require.js
	
	--2.2创建相应的模块
	src/js/modules/ModuleA.js
```
//定义 模块，需要使用  define  
define(function(){
	console.log('我是模块A');
})
	```
	src/js/modules/ModuleB.js
```
//定义 模块，需要使用  define  
define(function(){
	console.log('我是模块B');
})
	```
	--2.3 创建 src/index.html
```
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
			<!--引入require文件 ,配置require的入口文件，指向 main.js-->
			<script src="js/require.js" data-main = "./js/main.js"></script>
		</head>
		<body>
			require的第一个项目
		</body>
	</html>
	
		```
	--2.4 创建 src/js/main.js 
```
require(['./modules/ModuleA','./modules/ModuleB'],function(a,b){
	console.log("模块化的主入口文件运行了");
	
})
	 ```
	 --2.5 在编辑器下运行 src/index.html  ,查看结果
	 
	 
	 

	
	
	
	
