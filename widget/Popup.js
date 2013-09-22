var D = require('dual');

var CLASS_OPEN = 'atop-popup atop-popup-open yui3-cssreset';
var CLASS_CLOSED = 'atop-popup atop-popup-closed yui3-cssreset';
// var CLASS_PREFIX = 'atop-popup_';


var Popup = D.Widget.extend({
    initStructure : function () {
        this.$ = D.fromJSON([
            'div', {
                class: CLASS_CLOSED,
                'ui:asset':'content'
            }
        ]);
    },

    applyAttribute_open: function (value) {
        if(value) {
            this.assets.content.setAttribute('class', CLASS_OPEN);
        } else {
            this.assets.content.setAttribute('class', CLASS_CLOSED);
        }
    },

    setList: function (list) {
        this.assets.content.appendChild(list);
    },

    ready: function () {
        this.setAttribute('open', false);
        this.assets.content.listenTo('click');
        this.assets.content.on('dom.click', function () {
            this.setAttribute('open', !this.getAttribute('open'));
        }.bind(this));
    }
});

module.exports = Popup;