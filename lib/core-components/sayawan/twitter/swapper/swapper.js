const Align = FamousFramework.FamousEngine.components.Align;

FamousFramework.scene('sayawan:twitter:swapper', {
    behaviors: {
        '#swapper': {
            'style': {},
        },
        '#swapper-item': {
            'align': [1, 0, 0],
            '$yield': '.view',
            'style': {}
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function($dispatcher, $state, $famousNode) {
                setTimeout(function() {
                    $dispatcher.trigger('change-section', $state.get('currentSection'));
                }, 0)
            }
        },
        '$public': {
            // 'sections': function($state, $payload) {
            //     return $state.set('sections', $payload);
            // },
            'currentSection': '[[setter|currentSection]]',
            'transition': '[[setter|transition]]',
        },
        '#swapper': {
            'click': function($dispatcher, $state) {
                console.log('clicked');
                $dispatcher.trigger('change-section', 'Connect');
            },
            'change-section': function($famousNode, $state, $payload, $DOMElement) {
                // console.log($famousNode.getChildren()[0].getChildren(), $payload)
                let transition = $state.get('transition') || { duration: 500, curve: 'easeOutBounce' };
                let nodes = $famousNode.getChildren()[0].getChildren();

                nodes.forEach((node, i) => {
                    node.id = node.getChildren()[0].getValue().components[0].id;

                    if (!node.align)
                        node.align = new Align(node)

                    if ($payload === node.id) {
                        node.align.set(0, 0, 0, transition);
                        // $state.set('currentSection', node.id);
                    } else {
                        node.align.set(1, 0, 0, transition);
                    }

                });
            }
        },
    },
    states: {
        // sections: [],
        transition: null,
        align: [1, 0, 0],
        // currentSection: '',
    },
    tree: `
        <node id="swapper">
            <node id="swapper-item"></node>
        </node>
    `

});
// }).config({
//     famousNodeConstructorName: 'Swapper',
//     includes: ['_constructor.js']
// })