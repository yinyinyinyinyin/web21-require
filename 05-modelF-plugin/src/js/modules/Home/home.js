define(['text!./home.html','Et'],function(homeHTML,Et){
	console.log('home 模块');
	//console.log(homeHTML);
	//数据,
	//使用模板，可以使数据可渲染分离
	var books = [
		{"name":"仙剑奇侠传"},
		{"name":"圣墟"},
		{"name":"倚天屠龙记"}
	];
	var rs = Et.template(homeHTML,{books});
	document.body.innerHTML = rs;
});