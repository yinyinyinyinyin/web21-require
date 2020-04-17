//define 定义模块

define(function(){
	 console.log('我是模块A');
	//在模块中必须是以对象的形式存在 
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
});