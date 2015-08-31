const Node = FamousFramework.FamousEngine.core.Node;
const Align = FamousFramework.FamousEngine.components.Align;

class Swapper extends Node {
    constructor() {
        super();

        this.currentSection = null;
        this.sections = [];

        this.addComponent({
            // onSizeChange: () => {
            //     this.sections = this.getChildren()[0].getChildren();
            //     setTimeout(function() {
            //         this.changeSection('Home');
            //     }.bind(this), 10);
            // }
        });
    }

    _getNodeAlign(node) {
        if (!node._layoutAlign) {
            node._nodeAlign = new Align(node);
        }
        return node._nodeAlign;
    }

    changeSection(to, transition) {

        if (!transition)
            transition = { duration: 500, curve: 'easeOutBounce' };


        this.sections.forEach((childNode) => {
            childNode.id = childNode.getComponents()[3].getValue().id
            childNode.align = this._getNodeAlign(childNode)

            if (to === childNode.id) {
                // childNode.show();
                // childNode.getComponents()[3].setProperty('background-color', 'red')
                childNode.align.set(0, 0, 0, transition);
            } else {
                // childNode.hide();
                // childNode.getComponents()[3].setProperty('background-color', 'green')
                childNode.align.set(1, 0, 0, transition);
            }

        });
    }
}

FamousFramework.registerCustomFamousNodeConstructors({Swapper});