FamousFramework.component('sayawan:carousel:dots', {
    behaviors: {
        '$self': {
            'style': {
                'background-color': 'red'
            }
        },
        '#dot': {
            'size': [10, 10],
            'position-x': function($index, sizeX, dotWidth, spacing, dots) {
                var numPages = dots.length;
                var totalDotSize = dotWidth * numPages + spacing * (numPages - 1);
                var start = (sizeX - totalDotSize) / 2;
                var result = start + (dotWidth + spacing) * $index;
                return result;
            },
            '$repeat': function(dots) {
                return dots;
            },
            'style': function(backgroundColor, currentIndex, $index) {
                var bg = ($index === currentIndex) ? 'white' : 'transparent';

                return {
                    'background-color': bg,
                    'border-radius': '5px',
                    'border': '2px solid white',
                    'box-sizing': 'border-box'
                }
            },
        }
    },
    events: {
        '$public': {
            'dots': '[[setter]]',
            'currentIndex': '[[setter]]'
        },
        '$self': {
            'size-change': function($event, $state) {
                $state.set('sizeX', $event.value[0]);
            },
        },
        '#dot': {
            'click' : function($dispatcher, $event, $index, $state) {
                $state.set('currentIndex', $index);
                $dispatcher.emit('change-page', $index);
            },
        }
    },
    states: {
        dots: [],
        dotWidth: 10,
        spacing: 5,
        sizeX: 0,
        currentIndex: 0,
        backgroundColor: 'white'
    },
    tree: `
        <node id="dot"></node>
    `
});

