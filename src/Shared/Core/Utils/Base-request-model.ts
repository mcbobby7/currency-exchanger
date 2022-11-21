import { Observable } from "rxjs"
import { Method, _Headers, Body } from "./Types"
import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_BASE_URL}`
export default class BaseRequestModel {
  constructor(
    private url: string,
    private method: Method,
    private headers: _Headers,
    private body?: Body
  ) {
    this.url = url
    this.method = method || "GET"
    this.headers = headers || {}
    this.body = body
  }

  request (): Observable<any> {
    return new Observable((observer) => {

      // try {
      //   const res: any = await axios.get(`API_URL`, {
      //     headers: {},
      //     params: {}
      //   });
      // } catch (err) {
      //   console.log(err);
      // }


      axios.get(`${baseUrl}${this.url}`, {
        method: this.method,
        headers: this.headers,
      })
        .then((r: any) => {          
          return r.data
        })
        .then((data: any) => {          
          observer.next(data)
          observer.complete()
        })
        .catch((e: any) => {
          observer.error(e)

        })
      return () => {
        // clean up on unsubscribe
      }
    })
  }
}
