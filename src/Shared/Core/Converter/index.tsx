import React, { useEffect, useState } from "react"
import { ConverterStyle } from "./style"
import Button from "../../Components/Button"
import Input from "../../Components/TextBox"
import { ApiService } from "../Services"
import { take, map } from "rxjs/operators"
import { Link, useParams } from "react-router-dom"
import Loader from "../../Components/Loader"

interface ConvertResponse {
  setRecent: React.MouseEventHandler<HTMLButtonElement>
}
const Converter: React.FC<ConvertResponse> = ({ setRecent }) => {
  const [to, setTo] = useState("USD")
  const [from, setFrom] = useState("EUR")
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(0)
  const [, setRecords] = useState([])
  const [disableForm, setDisableForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [symbols, setSymbols] = useState([
    "uar",
    "mrx",
    "hde",
    "she",
    "sha",
    "USD",
    "EUR",
  ])
  const [mainSymbols, setMainSymbols] = useState<any>({})

  const { fromCurrency, toCurrency, toAmount } = useParams()

  // https://api.apilayer.com/fixer/symbols

  const swap = () => {
    let toCurrency: string = to
    let fromCurrency: string = from
    setTo(fromCurrency)
    setFrom(toCurrency)
  }
  const convertCurrency = () => {
    setLoading(true)
    const subscription = ApiService.get(
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
        setLoading(false)
        setResult(res.result)
      })

    return () => {
      subscription.unsubscribe()
    }
  }

  const getSymbols = () => {
    const subscription1 = ApiService.get(`/fixer/symbols`)
      .pipe(
        take(1),
        map((res: any) => {
          console.log(res)

          if (res.success) {
            setMainSymbols(res.symbols)
            return Object.keys(res.symbols)
          } else {
            return []
          }
        })
      )
      .subscribe((data: any) => {
        // setEmployees(employees);
        setSymbols(data)
        console.log(data)
      })
    return () => {
      subscription1.unsubscribe()
    }
  }

  const getLatest = () => {
    const subscription = ApiService.get(`/fixer/latest?base=${from}`)
      .pipe(
        take(1),
        map((res: any) => {
          if (res.success) {
            const data: any = Object.entries(res?.rates)
            setRecords(data)
            setRecent(data.slice(0, 8))

            return Object.keys(Object.entries(res?.rates))
          } else {
            return []
          }
        })
      )
      .subscribe((data: any) => {
        console.log(data)
      })

    return () => {
      subscription.unsubscribe()
    }
  }

  const setToF = (e: any) => {
    if (toCurrency) {
      if (e.target.value === from) {
        return
      } else {
        setTo(e.target.value)
        return
      }
    }

    setTo(e.target.value)
    if (e.target.value === from && e.target.value === symbols[0]) {
      setFrom(symbols[1])
    } else {
      setFrom(symbols[0])
    }
  }

  const setFromF = (e: any) => {
    setFrom(e.target.value)
    if (e.target.value === to && e.target.value === symbols[0]) {
      setTo(symbols[1])
    } else {
      setTo(symbols[0])
    }
  }

  useEffect(() => {
    // convertCurrency()
    // getSymbols()
    // getLatest()

    if (fromCurrency || toCurrency) {
      setDisableForm(true)
      setFrom(fromCurrency as string)
      setTo(toCurrency as string)
      setAmount(toAmount as unknown as number)
    }
  }, [fromCurrency, toCurrency, toAmount])

  return (
    <>
      {fromCurrency ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="title">
            {from} - <span style={{ fontSize: "19px" }}>{mainSymbols[from]}</span>
          </div>{" "}
          <Link style={{ textDecoration: "none" }} to={`/`}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      ) : (
        <div className="title">Currency Exchanger</div>
      )}

      <ConverterStyle>
        <div className="amount">
          <Input
            disabled={fromCurrency || toCurrency ? true : false}
            type="number"
            onChange={(e: number) =>
              e <= 0
                ? [setAmount(e), setResult(0), setDisableForm(true)]
                : [setAmount(e), setResult(0), setDisableForm(false)]
            }
            placeholder="Enter Amount"
            label="Amount"
            value={amount}
          />
          <div className="inRes">
            {amount} {from} ={" "}
            {result > 0 && (
              <>
                {result} {to}
              </>
            )}
          </div>
        </div>
        <div className="details">
          <div className="both">
            <div>
              <div className="label">From</div>
              <select
                onChange={(e) => setFromF(e)}
                value={from}
                disabled={disableForm}
                className="round"
              >
                {symbols.map((symbol: string) => (
                  <option key={symbol} value={symbol}>
                    {symbol}
                  </option>
                ))}
              </select>
            </div>
            {!fromCurrency && (
              <div className="swap" onClick={() => swap()}>
                Swap
              </div>
            )}
            <div>
              <div className="label">To</div>
              <select
                onChange={(e) => setToF(e)}
                value={to}
                disabled={disableForm && !toCurrency}
                className="round"
              >
                {symbols.map((symbol: string) => (
                  <option key={symbol} value={symbol}>
                    {symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {!toCurrency && (
            <div className="but" onClick={() => convertCurrency()}>
              <Button disabled={(disableForm && !toCurrency) || toCurrency === to}>
                Convert
              </Button>
            </div>
          )}

          {toCurrency && (
            <div className="but">
              <Link
                style={{ textDecoration: "none" }}
                to={`/details/${from}/${to}/${amount}`}
              >
                <Button disabled={(disableForm && !toCurrency) || toCurrency === to}>
                  Convert
                </Button>
              </Link>
            </div>
          )}
          <div className="foot">
            <div className="result">
              {result} {to}
            </div>
            <div className="more">
              <div className="but">
                {!fromCurrency && (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/details/${from}/${to}/${amount}`}
                  >
                    <Button disabled={disableForm}>More Details</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {loading && <Loader />}
      </ConverterStyle>
    </>
  )
}

export default Converter
