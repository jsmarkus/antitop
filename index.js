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

// for(var i = 0; i < 30; i++) {
// 	list.add({
// 		rank : 32 * i - 500,
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 		author: 'Foo Bar',
// 		url: '#test'
// 	});
// }

document.body.appendChild(popup.domify());


// console.log(l.stringify());