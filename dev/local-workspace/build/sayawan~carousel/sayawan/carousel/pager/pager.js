'use strict';

FamousFramework.component('sayawan:carousel:pager', {
    behaviors: {
        '#pager': {
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5]
        },
        '#image': {
            'size': [500, 500],
            'position': function (position) {
                return position;
            },
            'align': function (align, currentIndex, $index) {
                if (currentIndex > $index) {
                    return [-2, 0.5];
                } else if (currentIndex === $index) {
                    return align;
                } else {
                    return [2, 0.5];
                }
            },
            'mount-point': [0.5, 0.5],
            'origin': [0.5, 0.5],
            '$repeat': function (pageData) {
                return pageData;
            },
            'style': function (pageData, $index) {
                return {
                    'background-image': 'url(' + pageData[$index] + ')',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                };
            }
        }
    },
    events: {
        '$public': {
            'pageData': '[[setter]]',
            'currentIndex': function ($dispatcher, $state, $payload, $index) {
                $state.set('currentIndex', $payload);
            }
        }
    },
    states: {
        align: [0.5, 0.5],
        position: [0, 0],
        pageData: [],
        currentIndex: 0
    },
    tree: '\n        <node id="pager">\n            <node id="image"></node>\n        </node>\n    '
}).config({
    imports: {
        'sayawan:carousel': ['arrow', 'dots']
    }
});