FamousFramework.component('sayawan:carousel:arrow', {
    behaviors: {
        '$self': {
            'size': [40, 40],
        },
        '#arrow': {
            'style': {
                'color': 'white',
                'font-size': '40px',
                'line-height': '40px',
                'cursor': 'pointer',
                'text-hightlight': 'none',
                'z-index': 2
            },
            'content': function(direction) {
                return direction === 1 ? '>' : '<';
            }
        }
    },
    events: {
        '$public': {
            'direction': '[[setter]]',
        }
    },
    states: {
        direction: 1,
    },
    tree: `<node id="arrow"></node>`
});