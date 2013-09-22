var D = require('dual');
var Item = require('./CommentListItem');

var CommentList = D.List.extend({
    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {'class': 'atop-list'}, [
                ['div', {'class': 'atop-list-top'}, [
                    ['antitop:rank', {'ui:asset': 'top'}],
                ]],
                ['ul', {'ui:asset': 'root'}]
            ]
        ]);
    },

    setTopRank: function(value) {
        this.setAttribute('toprank', '' + value);
    },

    applyAttribute_toprank : function (value) {
        this.assets.top.setAttribute('value', value);
    },

    setupItem: function(data) {
        return new Item();
    },

    ready: function () {
        // this.assets.top.on('click', function () {
        //     this.emit('open');
        // }.bind(this));
    }
});

module.exports = CommentList;