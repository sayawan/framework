'use strict';

FamousFramework.component('sayawan:carousel:dots:dot', {
    behaviors: {
        '#dot': {
            'size': [10, 10],
            'style': function (backgroundColor) {
                return {
                    'background-color': backgroundColor,
                    'border-radius': '5px',
                    'border': '2px solid white',
                    'box-sizing': 'border-box'
                };
            }
        }
    },
    events: {
        '$public': {
            // 'deselect': function($state, $dispatcher) {
            //     $dispatcher.on('deselect', function() {
            //         console.log("da");
            //     });
            // console.log("hello from dot");
            //     $state.set('backgroundColor', 'transparent');
            // }
            'deselect-dot': function ($famousNode) {
                console.log("hello from dot");
                famousNode.setProperty('backgroundColor', 'transparent');
            },
            'select-dot': function ($famousNode) {
                console.log("hello from dot");
                famousNode.setProperty('backgroundColor', 'white');
            }
        },
        '#dot': {
            'deselect-dot': function ($state, $payload, $famousNode) {

                // console.log($payload.index, $state.get('$index'))
                if ($payload.index === $state.get('$index')) {
                    console.log('deselect', $state.get('$index'));
                    $state.set('backgroundColor', 'transparent');
                }
                // console.log($state, $payload);
            },
            'select-dot': function ($state, $payload, $dispatcher, $DOMElement) {
                // console.log($payload.index, $state.get('$index'))
                if ($payload.index === $state.get('$index')) {
                    $DOMElement.setProperty('backgroundColor', 'white');

                    console.log('select', $state.get('$index'));
                    // $dispatcher
                    // $state.set('backgroundColor', 'white');
                }
            },
            'click': function ($state) {
                // $state.set('backgroundColor', 'transparent');
            }
        }
    },
    states: {
        backgroundColor: 'transparent'
    },
    tree: '<node id="dot"></node>'
});