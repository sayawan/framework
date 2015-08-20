var data = [
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._03_-_Que_viene_el_Coco_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._04_-_El_de_la_rollona_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._05_-_Tal_para_qual_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._06_-_Nadie_se_conoce_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._07_-_Ni_asi_la_distingue_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._09_-_Tantalo_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._10_-_El_amor_y_la_muerte_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._11_-_Muchachos_al_avC3ADo_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._12_-_A_caza_de_dientes_thumb.jpg',
    'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._13_-_Estan_calientes_thumb.jpg'
];

FamousFramework.component('sayawan:carousel', {
    behaviors: {
        '#next': {
            'direction': 1,
            'position': [-40, 0, 0],
            'align': [1, 0.5, 0],
            'mount-point': [1, 0.5, 0],
        },
        '#back': {
            'direction': -1,
            'position': [40, 0, 0],
            'align': [0, 0.5, 0],
            'mount-point': [0, 0.5, 0],
        },
        '#dots': {
            'size': [undefined, 20],
            'position': [0, -50, 0],
            'align': [0.5, 1, 0],
            'mount-point': [0.5, 1, 0],
            'currentIndex': function(currentIndex) {
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
            'currentIndex': '[[setter]]',
        },
        '#dots': {
            'change-page': function($state, $payload) {
                $state.set('currentIndex', $payload);
            }
        },
        '#next': {
            'click': function($state) {
                var i = $state.get('currentIndex');

                if (i < $state.get('pageData').length-1) {
                    $state.set('currentIndex', $state.get('currentIndex') + 1 );
                } else {
                    $state.set('currentIndex', 0);
                }
            }
        },
        '#back': {
            'click': function($state) {
                var i = $state.get('currentIndex');

                if (i > 0) {
                    $state.set('currentIndex', $state.get('currentIndex') - 1 );
                } else {
                    $state.set('currentIndex', $state.get('pageData').length-1);
                }
            }
        }
    },
    states: {
        pageData: data,
        currentIndex: 0
    },
    tree: `
        <arrow id="next"></arrow>
        <arrow id="back"></arrow>
        <dots id="dots"></dots>
        <pager id="pager"></pager>
    `
}).config({
    imports: {
        'sayawan:carousel': ['arrow', 'dots', 'pager']
    }
});