var D = require('dual');
require('./Rank');

var CLASS_PREFIX     = 'atop-list-item_';
var CLASS_ROOT       = 'atop-list-item';
var CLASS_TEXT       = CLASS_PREFIX + 'text';
var CLASS_AUTHOR     = CLASS_PREFIX + 'author';
var CLASS_LINK       = CLASS_PREFIX + 'link';
var CLASS_RANK       = CLASS_PREFIX + 'rank';

var CommentListItem = D.Widget.extend({
    initStructure : function () {
        this.$ = D.fromJSON([
            'li', {class: CLASS_ROOT}, [
                ['a', {'ui:asset':'link', class: CLASS_LINK}, [
                    ['antitop:rank', {'ui:asset':'rank'  , class: CLASS_RANK   }],
                    ['div', {'ui:asset':'text'  , class: CLASS_TEXT   }],
                    ['div', {'ui:asset':'author', class: CLASS_AUTHOR }]
                ]]
            ]
        ]);
    },

    applyAttribute_url: function(value) {
        this.assets.link.setAttribute('href', value);
    },

    applyAttribute_rank: function(value) {
        this.assets.rank.setAttribute('value', value);
    },

    applyAttribute_text: function(value) {
        this.assets.text.setText(value);
    },

    applyAttribute_author: function(value) {
        this.assets.author.setText(value);
    }
});

module.exports = CommentListItem;