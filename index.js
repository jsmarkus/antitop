var bean = require('bean');
var List = require('./widget/CommentList');
var Popup = require('./widget/Popup');
var Router = require('./Router');
var waitDOM = require('./waitDOM');

var HabrParser = require('./parser/Habr');
var D3Parser = require('./parser/D3');
var D3Helper = require('./helper/D3');
var HyperCommentsParser = require('./parser/HyperComments');
var IntenseDebateParser = require('./parser/IntenseDebate');

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

//d3.ru post
router.add(
	/^\w+:\/\/(\w+\.)?d3\.ru\/comments\/\w+/,
	onSiteD3);

//lenta.ru post
router.add(
	/^\w+:\/\/(\w+\.)?lenta\.ru\/comments\/news\/\w+/,
	onSiteLenta);

//tvrain.ru post
router.add(
	/^\w+:\/\/(\w+\.)?tvrain\.ru\/articles\/\w+/,
	onSiteTvrain);

//macdigger.ru post
router.add(
	/^\w+:\/\/(\w+\.)?macdigger\.ru\/\w+/,
	onSiteMacdigger);

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

function onSiteD3() {
	D3Helper.expandCollapsedComments();
	process(new D3Parser(document.body), 'd3');
}

//--------------------------------------------------------------------

function onSiteLenta() {
	waitDOM(document.body, '.hc_message', function () {
		process(new HyperCommentsParser(document.body), 'lenta');
	});
}

//--------------------------------------------------------------------
function onSiteTvrain() {
	waitDOM(document.body, '.hc_message', function () {
		process(new HyperCommentsParser(document.body), 'tvrain');
	});
}

//--------------------------------------------------------------------
function onSiteMacdigger() {
	waitDOM(document.body, '.idc-thread', function () {
		process(new IntenseDebateParser(document.body), 'macdigger');
	});
}

//--------------------------------------------------------------------
