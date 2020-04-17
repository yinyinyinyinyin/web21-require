require.config({
	baseUrl:'./js',
	paths:{
		i18n:'libs/i18n'
	}
})
require(['i18n!nls/color','i18n!nls/focus'],function(c,f){
	console.log('我是程序入口');
	console.info(c.red);
	console.log(f);
	
	var rs = '';
	for(var i = 0;i<f.focus.length;i++){
		rs += `<img src=${f.focus[i].imgUrl} />`;
	}
	console.log(rs);
	document.body.innerHTML = rs;
});