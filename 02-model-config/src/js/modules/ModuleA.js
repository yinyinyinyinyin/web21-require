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