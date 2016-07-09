/**
 * Created by Michael on 6/25/16.
 */

import {Injectable} from 'angular2/core';
import {Headers, Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private _http: Http) {}

    authenticate(email, password) {

        let credentials = {
            email: email,
            password: password
        };
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post('/authenticate', JSON.stringify(credentials), {
            headers: headers
        }).map(res => res.json());

    }

    logout() {
        return this._http.get('/logout').map(res => res.json());
    }
    
    

}