define("ModuleA",[],function(){return console.log("我是模块A"),{feibona:function(o){return 2==o||1==o?1:o>2?this.feibona(o-1)+this.feibona(o-2):void 0}}}),define("ModuleB",[],function(){console.log("我是模块B")}),require.config({baseUrl:"./js",paths:{ModuleA:"modules/ModuleA",ModuleB:"modules/ModuleB"}}),require(["ModuleA","ModuleB"],function(o,e){console.log("我是入口模块，所有程序必须经过我"),console.log(o.feibona(8))}),define("src/js/main",function(){});