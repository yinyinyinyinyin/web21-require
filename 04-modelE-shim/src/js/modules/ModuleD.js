(function() {
	console.log($);
var person = "sheldon";
var D = {
info: " this is D module",
fnD: function() {
// 依赖 jQuery
return "#" + $.trim(person + " say:" + this.info) + "#"; }
};
window.D = D; //调用该模块的全局对象
})();