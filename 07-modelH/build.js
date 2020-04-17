{
	baseUrl:'.',
	dir:'dist',
	optimize: "uglify2",
	mainConfigFile: "src/js/main.js", // 模块入口文件，基于 baseUrl
	removeCombined: true, //如果为true，将从输出目录中删除已合并的文件
	fileExclusionRegExp: '^(r|build.*)\.js$', //过滤，匹配到的文件将不会被输出到dir
	paths: { // 模块路径信息
	ModuleA: "src/js/modules/ModuleA",
	ModuleB: "src/js/modules/ModuleB",
	},
	writeBuildTxt: true, // 写出 build.txt 日志
	modules: [{ name: "src/js/main" }]
}