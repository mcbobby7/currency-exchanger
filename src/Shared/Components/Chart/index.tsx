import React, { useEffect, useState } from "react"
import { take, map } from "rxjs/operators"
import { useParams } from "react-router-dom"
import { ApiService } from "../../../Shared/Core/Services"

import moment from "moment"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Historical Rate Chart",
    },
  },
}

export default function Chart(props: any) {
  const [startDate] = useState("2021-11-20")
  const [endDate] = useState("2022-11-20")
  const [res, setRes] = useState(0)
  //   const [label, setLabel] = useState<any>([])
  const [data, setData] = useState<any>()

  const { fromCurrency, toCurrency, toAmount } = useParams()

  const getHistory = () => {
    const subscription1 = ApiService.get(
      `/fixer/timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${toCurrency}&base=${fromCurrency}`
    )
      .pipe(
        take(1),
        map((res: any) => {
          console.log(res)

          if (res.success) {
            // setMainSymbols(res.symbols)
            return res
          } else {
            return []
          }
        })
      )
      .subscribe((data: any) => {
        // setData(data)
        console.log(data)
        let date: any = moment().subtract(1, "months")
        console.log(moment(date._d).format("YYYY-MM-DD"))
        console.log(moment(date._d).format("MMMM"))
        let label: any = []
        let dates: any = []
        for (let i = 0; i < 12; i++) {
          let date: any = moment().subtract(i, "months")
          label.push(moment(date._d).format("MMMM"))
          dates.push(moment(date._d).format("YYYY-MM-DD"))
        }
        // setLabel(label)
        setRes(9)
        // console.log(me);
        // console.log(label);
        console.log(Object.values(data.rates[dates[0]])[0])
        if (data.success) {
          setData({
            labels: label,
            datasets: [
              {
                label: fromCurrency,
                data: [
                  Object.values(data.rates[dates[0]])[0],
                  Object.values(data.rates[dates[1]])[0],
                  Object.values(data.rates[dates[2]])[0],
                  Object.values(data.rates[dates[3]])[0],
                  Object.values(data.rates[dates[4]])[0],
                  Object.values(data.rates[dates[5]])[0],
                  Object.values(data.rates[dates[6]])[0],
                  Object.values(data.rates[dates[7]])[0],
                  Object.values(data.rates[dates[8]])[0],
                  Object.values(data.rates[dates[9]])[0],
                  Object.values(data.rates[dates[10]])[0],
                  Object.values(data.rates[dates[11]])[0],
                ],
                backgroundColor: "#45A29E",
              },
            ],
          })
        }
      })
    return () => {
      subscription1.unsubscribe()
    }
  }

  useEffect(() => {
    getHistory()
  }, [fromCurrency, toCurrency, toAmount])

  return (
    <>{data?.labels.length > 0 && <Bar key={res} options={options} data={data} />}</>
  )
}
