    import {BaseView} from 'js/base.view.js';
    import {services} from 'js/app.services.js';
    class AboutController extends BaseView {
        constructor($scope) {
            services.inject(this, '$scope', 'cache');
            this.data = {};
            init();
        }

        init(param1) {
        }

        $scopescopeFun(param1) {
            console.log(param1);
        }

        decFun(param1, param2) {
            console.log(param1, param2);
        }
    }

    export {AboutController};