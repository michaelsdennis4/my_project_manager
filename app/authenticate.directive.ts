/**
 * Created by Michael on 7/23/16.
 */

import {ElementRef, DynamicComponentLoader, Directive, Attribute
} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from "angular2/router";
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoginService} from './login.service';

@Directive({
    selector: 'router-outlet',
    providers: [LoginService, HTTP_PROVIDERS]
})
export class AuthenticateRouterOutlet extends RouterOutlet {
    publicRoutes: String[];
    private parentRouter: Router;
    private loginService: LoginService;

    constructor(
        _elementRef: ElementRef, _loader: DynamicComponentLoader,
        _parentRouter: Router, @Attribute('name') nameAttr: string,
        _loginService: LoginService
    ) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.loginService = _loginService;
        this.publicRoutes = ['login', 'signup'];
    }

    activate(instruction: ComponentInstruction) {
        if (this.publicRoutes.indexOf(instruction.urlPath) >= 0) {
            return super.activate(instruction);
        } else {
            this.loginService.isLoggedIn().subscribe(result => {
                if (result.message === 'login') {
                    this.parentRouter.navigate(['Login']);
                } else {
                    return super.activate(instruction);
                }
            });
        }
    }

}