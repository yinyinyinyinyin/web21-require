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
	 
## 3. 使用模块中的属性和方法
	--3.1 修改src/js/modules/ModuleA.js
```
//定义 模块，需要使用  define  
define(function(){
	console.log('我是模块A');
	var person = "lili";
	var A = {
		info:"我是A模块的info",
		fnA:function(){
			return person+"说："+this.info;
		}
	}
	return A;
	
})
	```
	
	--3.2修改src/js/modules/ModuleA.js
```
//定义 模块，需要使用  define  
define(function(){
	console.log('我是模块B');
	var person = "大山";
	var B = {
		info:"我是B模块的info",
		fnB:function(){
			return person+"说："+this.info;
		}
	}
	return B;
	
})
	 ```
	 --3.3 修改 src/js/main.js
```
//注意：执行后，A模块或B模块的顺序是不确定的，因为是异步加载
require(['./modules/ModuleA','./modules/ModuleB'],function(a,b){
	console.log("模块化的主入口文件运行了");
	//使用了A模块中的属性和方法
	console.log(a.info);
	console.log(a.fnA());
	
	//使用B模块中的属性和方法
	console.log(b.info);
	console.log(b.fnB());
	
})
	 ```
	
## 4.require配置	 
	修改了 src/js/main.js 文件
```
//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery'//引入的网络模块
	}
})

//需要导入依赖列表
//可以使用 require引入模块
//require有两个参数
//第一个参数  ，是一个数组，可以填写 将要引入的模块地址
//第二个参数一个函数，是 index.html 指向 main所要运行的函数
//下面函数中的a,b分别是模块的别名
//注意：执行后，A模块或B模块的顺序是不确定的，因为是异步加载
require(['ModuleA','ModuleB','jquery'],function(a,b,$){
	console.log("模块化的主入口文件运行了");
	//使用了A模块中的属性和方法
	console.log(a.info);
	console.log(a.fnA());
	//使用B模块中的属性和方法
	console.log(b.info);
	console.log(b.fnB());
	console.log($);
})
	```
	
## 5. 自定义方式  模块
	--5.1 简单的键值对的方式
	src/js/modules/ModuleC.js
```
define ({
	color:'red'
})
	```
	修改 src/js/main.js
```
//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery',//引入的网络模块
+		ModuleC:'modules/ModuleC'
	}
})

+ require(['ModuleA','ModuleB','jquery','ModuleC'],function(a,b,$,c){
	console.log("模块化的主入口文件运行了");
	//使用了A模块中的属性和方法
	console.log(a.info);
	console.log(a.fnA());
	
	//使用B模块中的属性和方法
	console.log(b.info);
	console.log(b.fnB());
	console.log($);
	
	//使用C模块中的对象
+	console.log(c.color);
})
	```
	--5.2 自定义模块和依赖
	实例：参看  ModuleA  和ModuleB
	
	--5.3自定义模块和依赖   在模块中调用其他模块
	
	创建模块 src/js/modules/ModuleD.js
```
define(['ModuleA','ModuleB'],function(a,b){
	console.log("我是模块D中调用的模块A：",a.info);
	console.log("我是模块D");
	
})
	```
	修改src/js/main.js
```
//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery',//引入的网络模块
		ModuleC:'modules/ModuleC',
+		ModuleD:'modules/ModuleD'
	}
})
+ require(['ModuleA','ModuleB','jquery','ModuleC','ModuleD'],function(a,b,$,c,d){
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
	```
	
	--5.4 自定义模块和依赖的  就近定义
	创建  src/js/modules/ModuleE.js
```
//就近定义
define(function(require,exports,modules){
	//就近定义
	var A = require("ModuleA");
	var B = require("ModuleB");
	console.log('A=',A);
	console.log('B=',B);
})
	```
	修改 src/js/main.js
```
//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery',//引入的网络模块
		ModuleC:'modules/ModuleC',
		ModuleD:'modules/ModuleD',
+		ModuleE:'modules/ModuleE'
	}
})
+ require(['ModuleA','ModuleB','jquery','ModuleC','ModuleD','ModuleE'],function(a,b,$,c,d,e){
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
	```
	--5.5 自定义命名模块
	创建 src/js/modules/ModuleF.js
```

//参数：模块名，  引入的其他依赖，     执行的函数
define("msg",['ModuleA','ModuleB'],function(a,b){
	console.log("我是模块f中调用的模块A：",a.info);
	console.log("我是模块f");
	
})
	```
	修改 src/js/main.js
```
//require的配置
require.config({
	baseUrl:'./js',//基础目录
	paths:{
		ModuleA:'modules/ModuleA',//引入的本地模块
		ModuleB:'modules/ModuleB',
		jquery:'https://cdn.bootcss.com/jquery/3.5.0/jquery',//引入的网络模块
		ModuleC:'modules/ModuleC',
		ModuleD:'modules/ModuleD',
		ModuleE:'modules/ModuleE',
+		msg:'modules/ModuleF'  //如果定义了模块名，引入时必须按模块名来引入
	}
})

+ require(['ModuleA','ModuleB','jquery','ModuleC','ModuleD','ModuleE','msg'],function(a,b,$,c,d,e,m){
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
	```
	
	
