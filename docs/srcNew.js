/**
 * 1、
 *
 */
import {services} from '../servicesFold'

class LoginController extends BaseController {
    constructor() {
        services.inject("LoginService", "EssentialServise", "$location");
    }

    init() {
        //使用了，但是没有注入
        this.LoginService.doLogin();
    }

}

export {LoginController};