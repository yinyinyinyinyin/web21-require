{
	baseUrl:'.',
	dir:'dist',
	optimize: "uglify2",
	mainConfigFile: "src/js/main.js", // 模块入口文件，基于 baseUrl
	removeCombined: true, //如果为true，将从输出目录中删除已合并的文件
	fileExclusionRegExp: /^(r|build.*)\.js$/, //过滤，匹配到的文件将不会被输出到dir
	paths: { // 模块路径信息
	ModuleA: "src/js/modules/ModuleA",
	ModuleB: "src/js/modules/ModuleB",
	},
	// standard.keepLines.keepWhitespace.keepComments
	//optimizeCss: "standard",
	writeBuildTxt: true // 写出 build.txt 日志
	// 需要优化的模块
	modules: [{ name: "src/js/main" }]
}
/*
{
    baseUrl: '.',//模块的基础路径
    dir: 'dist',//打包之后文件目录
    optimize:'uglify2',//压缩方式
    mainConfigFile: 'src/js/main.js',//项目的入口文件
    removeCombined: true,//合并之后删除源文件
    fileExclusionRegExp: '^(r|build.*)\.js$',//哪些文件是不需要处理的
    //需要打包的模块的配置
    paths: {
        ModuleA: 'src/js/Modules/ModuleA',
        ModuleB: 'src/js/Modules/ModuleB',
    },
    writeBuildTxt:true,
    modules: [{name:'src/js/main'}]
}
*/