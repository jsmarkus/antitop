var D = require('dual');

var CLASS_PREFIX = 'atop-list-item_';

var CLASS_RANK = CLASS_PREFIX + 'rank';
var CLASS_RANK_PLUS = CLASS_RANK + ' ' + CLASS_RANK + '-plus';
var CLASS_RANK_MINUS = CLASS_RANK + ' ' + CLASS_RANK + '-minus';

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
        var cssClass = CLASS_RANK;
        if (value > 0) {
            text = '+' + text;
            cssClass = CLASS_RANK_PLUS;
        }
        if (value < 0) {
            cssClass = CLASS_RANK_MINUS;
        }
        asset.setText('' + text);
        asset.setAttribute('class', cssClass);
    }
});

D.factory.register('antitop:rank', Rank);

module.exports = Rank;