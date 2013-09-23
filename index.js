var bean = require('bean');
var List = require('./widget/CommentList');
var Popup = require('./widget/Popup');
var HabrParser = require('./parser/Habr');

var parser = new HabrParser(document.body);

var topRank = '';
var results = parser.parse()
	.sort(function(a, b) {
		return a.rank - b.rank;
	})
	.filter(function(item) {
		return item.rank < 0;
	});

console.log(results);

if(results.length) {
	topRank = results[0].rank;
}

var popup = new Popup();
var list = new List();
popup.setList(list);

list.setTopRank(topRank);
for (var i = 0; i < results.length; i++) {
	list.add(results[i]);
}

document.body.appendChild(popup.domify());
bean.on(document.body, 'click', popup.close.bind(popup));
