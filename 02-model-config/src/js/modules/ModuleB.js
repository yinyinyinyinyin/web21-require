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