
function Router() {
	this._matchers = [];
}

module.exports = Router;

Router.prototype.add = function (regex, callback) {
	this._matchers.push([regex, callback]);
};

Router.prototype.run = function () {
	var matchers = this._matchers;
	var href = '' + document.location.href;
	for (var i = 0; i < matchers.length; i++) {
		var matcher = matchers[i];
		var re = matcher[0];
		var cb = matcher[1];
		var parts = href.match(re);
		if(parts) {
			cb(parts);
			return;
		}
	}
};