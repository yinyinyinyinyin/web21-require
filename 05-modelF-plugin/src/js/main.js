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
	//var name = "tiantian";
	//var rs = Et.template(`<h1>{-catName}</h1>`,{catName:name});
	//console.log("rs:",rs);
})