import { Observable } from "rxjs";
import { Method, _Headers, Body } from "./Types";

const baseUrl = 'https://api.apilayer.com';
export default class BaseRequestModel {
    constructor(private url: string, private method: Method, private headers: _Headers, private body?: Body) {
        this.url = url;
        this.method = method || "GET";
        this.headers = headers || {};
        this.body = body;
    }

    request(): Observable<any> {
        return new Observable(observer => {
            fetch(
                `${baseUrl}${this.url}`,
                {
                    method: this.method,
                    body: this.body,
                    headers: this.headers,
                }).then((r: any) => {
                    return r.json()
                }).then((data: any) => {
                    observer.next(data);
                    observer.complete();
                }).catch((e: any) => {
                    observer.error(e);
                })
            return () => {
                // clean up on unsubscribe
            }
        });
    }
}