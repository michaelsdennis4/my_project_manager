import {Injectable} from 'angular2/core';
import {Headers, Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
    constructor(private _http: Http) {}

    getCurrentUser() {
        return this._http.get('/users').map(res => res.json());
    }

    signUp(form) {

        let credentials = {
            email: form.value.email ? form.value.email : "",
            first_name: form.value.first_name ? form.value.first_name : "",
            last_name: form.value.last_name ? form.value.last_name : "",
            password: form.value.password ? form.value.password : "",
            confirm_password: form.value.confirm_password ? form.value.confirm_password : ""
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post('/users', JSON.stringify(credentials), {
            headers: headers
        }).map(res => res.json());

    }
    
    updateProfile(form) {

        let credentials = {
            email: form.value.email,
            first_name: form.value.first_name,
            last_name: form.value.last_name
        };
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.patch('/users', JSON.stringify(credentials), {
            headers: headers
        }).map(res => res.json());

    }
    
    changePassword(form) {
        
        let credentials = {
            old_password: form.value.old_password ? form.value.old_password : "",
            new_password: form.value.new_password ? form.value.new_password : "",
            confirm_new_password: form.value.confirm_new_password ? form.value.confirm_new_password : ""
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.patch('/password', JSON.stringify(credentials), {
            headers: headers
        }).map(res => res.json());

    }


}