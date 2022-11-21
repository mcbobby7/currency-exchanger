import { ApiService } from "../Services"
import { take, map } from "rxjs/operators"


export const convert = async (to: string, from: string, amount: number) => {
    const subscription = await ApiService.get(
        `/fixer/convert?to=${to}&from=${from}&amount=${amount}`
      )
        .pipe(
          take(1),
          map((res: any) => {
            if (res.success) {
              return res
            } else {
              return null
            }
          })
        )
        .subscribe((res: any) => {
            return res
        })
  
      return () => {
        subscription.unsubscribe()
      }
}