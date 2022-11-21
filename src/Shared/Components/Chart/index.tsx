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

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {
  const [startDate] = useState<string>("2021-11-20")
  const [endDate] = useState<string>("2022-11-20")
  const [res, setRes] = useState<number>(0)
  //   const [label, setLabel] = useState<any>([])
  const [data, setData] = useState<any>({})

  const { fromCurrency, toCurrency, toAmount } = useParams()

  const getHistory = () => {
    const subscription1 = ApiService.get(
      `/fixer/timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${toCurrency}&base=${fromCurrency}`
    )
      .pipe(
        take(1),
        map((res: any) => {
          if (res.success) {
            return res
          } else {
            return []
          }
        })
      )
      .subscribe((data: any) => {
        // let date: any = moment().subtract(1, "months")
        let yesterday: any = moment().subtract(1, 'day')
        let label: string[] = []
        let dates: string[] = []
        for (let i = 0; i < 12; i++) {
          let date: any = moment().subtract(i, "months")
          label.push(moment(date._d).format("MMMM"))
          dates.push(moment(date._d).format("YYYY-MM-DD"))
        }
        setRes(9)
        if (data.success) {          
          setData({
            labels: label,
            datasets: [
              {
                label: fromCurrency,
                data: [
                  Object.values(data.rates[moment(yesterday._d).format("YYYY-MM-DD")])[0],
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
    <>{data?.labels && <Bar key={res} options={options} data={data} />}</>
  )
}

export default Chart
