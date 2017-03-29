/**
        *
        */
import { BaseView } from 'js/base.view.js';
import { services } from 'js/app.services.js';

class AboutController extends BaseView {
  constructor($scope) {
    services.inject(this, '$scope', 'cache');
  }
}

export { AboutController };