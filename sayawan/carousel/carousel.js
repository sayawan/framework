'use strict';

FamousFramework.component('sayawan:carousel', {
    behaviors: {
        '#next': {
            'direction': 1,
            'position': [-40, 0, 0],
            'align': [1, 0.5, 0],
            'mount-point': [1, 0.5, 0]
        },
        '#back': {
            'direction': -1,
            'position': [40, 0, 0],
            'align': [0, 0.5, 0],
            'mount-point': [0, 0.5, 0]
        },
        '#dots': {
            'size': [undefined, 20],
            'position': [0, -50, 0],
            'align': [0.5, 1, 0],
            'mount-point': [0.5, 1, 0],
            'currentIndex': function (currentIndex) {
                return currentIndex;
            }
        },
        '#pager': {
            'pageData': '[[identity]]',
            'currentIndex': '[[identity]]'
        }
    },
    events: {
        '$public': {
            'currentIndex': '[[setter]]'
        },
        '#dots': {
            'change-page': function ($state, $payload) {
                $state.set('currentIndex', $payload);
            }
        },
        '#next': {
            'click': function ($state) {
                var i = $state.get('currentIndex');

                if (i < $state.get('pageData').length - 1) {
                    $state.set('currentIndex', $state.get('currentIndex') + 1);
                } else {
                    $state.set('currentIndex', 0);
                }
            }
        },
        '#back': {
            'click': function ($state) {
                var i = $state.get('currentIndex');

                if (i > 0) {
                    $state.set('currentIndex', $state.get('currentIndex') - 1);
                } else {
                    $state.set('currentIndex', $state.get('pageData').length - 1);
                }
            }
        }
    },
    states: {
        pageData: data,
        currentIndex: 0
    },
    tree: '\n        <arrow id="next"></arrow>\n        <arrow id="back"></arrow>\n        <dots id="dots"></dots>\n        <pager id="pager"></pager>\n    '
}).config({
    includes: ['data.js'],
    imports: {
        'sayawan:carousel': ['arrow', 'dots', 'pager']
    }
});