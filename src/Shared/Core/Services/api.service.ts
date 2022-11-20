import { Observable } from 'rxjs';
import BaseRequestModel from '../Utils/Base-request-model';
import { Body } from '../Utils/Types';

export const ApiService = {
    // get request
    get: (route: string): Observable<any> => {
        const headers = {
            // "apikey": "BBHGRpCmHLY0R1mwc33ikaVPRkQhYX8s"
            // "apikey": "MKiA1oKgKsANDTKKu4zvoXczrLu42Hp4"
            "apikey": "sGB0KIOoUCJXSQYHV7paNa8FBfnjDYQ0"
        };
        const newBase = new BaseRequestModel(route, 'GET', headers);
        return newBase.request();
    },
    // post request
    // post: (route: string, form: Body): Observable<any> => {
    //     const headers = {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json'
    //     };
    //     const newBase = new BaseRequestModel(route, 'POST', headers, form)
    //     return newBase.request();
    // },
};