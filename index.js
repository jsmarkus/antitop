var bean = require('bean');
var List = require('./widget/CommentList');
var Popup = require('./widget/Popup');
var HabrParser = require('./parser/Habr');
var Router = require('./Router');

//--------------------------------------------------------------------

var router = new Router();

//habrahabr.ru regular post or event or QA
router.add(
	/^\w+:\/\/(\w+\.)?habrahabr\.ru\/(post|event|qa)\/\w+/,
	onSiteHabrahabr);


//habrahabr.ru company blog or question or event
router.add(
	/^\w+:\/\/(\w+\.)?habrahabr\.ru\/company\/\w+\/(blog|questions|events)\/\w+/,
	onSiteHabrahabr);

//testing page
router.add(
	/^file:/,
	onSiteHabrahabr);

router.run();




//--------------------------------------------------------------------

function process(parser, theme) {
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

	popup.setTheme(theme);

	list.setTopRank(topRank);
	for (var i = 0; i < results.length; i++) {
		list.add(results[i]);
	}

	document.body.appendChild(popup.domify());
	bean.on(document.body, 'click', popup.close.bind(popup));
}

//--------------------------------------------------------------------

function onSiteHabrahabr() {
	process(new HabrParser(document.body), 'habr');
}

//--------------------------------------------------------------------
