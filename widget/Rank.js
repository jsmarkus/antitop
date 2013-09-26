var D = require('dual');

var CLASS_PREFIX     = 'atop-list-item_';
var CLASS_RANK       = CLASS_PREFIX + 'rank';
var CLASS_RANK_PLUS  = CLASS_RANK + '-plus';
var CLASS_RANK_MINUS = CLASS_RANK + '-minus';

var Rank = D.Widget.extend({
    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {
                'ui:asset': 'rank',
                class: CLASS_RANK
            }
        ]);
    },

    applyAttribute_value: function(value) {
        var asset = this.assets.rank;
        var text = '' + value;

        asset.removeClass(CLASS_RANK_PLUS);
        asset.removeClass(CLASS_RANK_MINUS);

        if (value > 0) {
            text = '+' + text;
            asset.addClass(CLASS_RANK_PLUS);
        }
        if (value < 0) {
            asset.addClass(CLASS_RANK_MINUS);
        }
        asset.setText('' + text);
    }
});

module.exports = Rank;