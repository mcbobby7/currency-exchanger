import { Observable } from "rxjs"
import BaseRequestModel from "../Utils/Base-request-model"

export const ApiService = {
  // get request
  get: (route: string): Observable<any> => {
    const headers = {
      // "apikey": "BBHGRpCmHLY0R1mwc33ikaVPRkQhYX8s"
      // "apikey": "MKiA1oKgKsANDTKKu4zvoXczrLu42Hp4"
      // apikey: "sGB0KIOoUCJXSQYHV7paNa8FBfnjDYQ0",
    }
    const newBase = new BaseRequestModel(route, "GET", headers)
    return newBase.request()
  },
}
