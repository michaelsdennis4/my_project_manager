/**
 * Created by Michael on 8/7/16.
 */

import {Injectable} from "angular2/core";
import {Headers, Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    constructor(private _http: Http) {}

    addNewProject(form) {

        let data = {
            title: form.value.title ? form.value.title : "",
            description: form.value.description ? form.value.description : "",
            repo: form.value.repo ? form.value.repo : "",
            url: form.value.url ? form.value.url : ""
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post('/projects', JSON.stringify(data), {
            headers: headers
        }).map(res => res.json());

    }


}