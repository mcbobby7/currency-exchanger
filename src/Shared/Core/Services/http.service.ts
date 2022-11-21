import { ApiService } from "../Services"
import { take, map } from "rxjs/operators"


export const convert = async (to: string, from: string, amount: number) => {
    const subscription = await ApiService.get(
        `/fixer/convert?to=${to}&from=${from}&amount=${amount}`
      )
        .pipe(
          take(1),
          map( async(res: any) => {
            if (res.success) {
              return await res
            } else {
              return null
            }
          })
        )
        .subscribe( async(res: any) => {
            return await res
        })
  
      return () => {
        subscription.unsubscribe()
      }
}