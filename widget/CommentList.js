var D = require('dual');
var Item = require('./CommentListItem');
var Rank = require('./Rank');

var CLASS_MAIN = 'atop-list';
var CLASS_TOP = 'atop-list-top';


var CommentList = D.List.extend({
    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {'class': CLASS_MAIN}, [
                ['div', {'class': CLASS_TOP}, [
                    ['antitop:rank', {'ui:asset': 'top'}],
                ]],
                ['ul', {'ui:asset': 'root'}]
            ]
        ], {
            'antitop:rank':Rank
        });
    },

    setTopRank: function(value) {
        this.setAttribute('toprank', '' + value);
    },

    applyAttribute_toprank : function (value) {
        this.assets.top.setAttribute('value', value);
    },

    setupItem: function(data) {
        return new Item();
    }
});

module.exports = CommentList;