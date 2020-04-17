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