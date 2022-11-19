import React, { useEffect, useState } from "react";
import { ConverterStyle } from './style'
import Button from '../../Components/Button'
import Input from '../../Components/TextBox'
import Select from '../../Components/Dropdown'
import { ApiService } from "../Services";
import { take, map } from "rxjs/operators";
import { Body } from "../../../Shared/Core/Utils/Types";


interface ConvertResponse {                         
    date: string,
    historical: string,
    info: {},
    query: {},
    result: number,
    success: boolean                     
 }
 
export default function Converter(props: any) {

    const [to, setTo] = useState('USD')
    const [from, setFrom] = useState('EUR')
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState(0)
    const [records, setRecords] = useState([])
    const [disableForm, setDisableForm] = useState(false)
    const [symbols, setSymbols] = useState(['uar', 'mrx', 'hde', 'she', 'sha', 'USD', 'EUR'])
    // https://api.apilayer.com/fixer/symbols

    const swap = () => {
        let toCurrency : string = to
        let fromCurrency : string = from
        setTo(fromCurrency)
        setFrom(toCurrency)
    }
    const convertCurrency = () => {
        console.log(`/fixer/convert?to=${to}&from=${from}&amount=${amount}`);
        
        const subscription = ApiService.get(`/fixer/convert?to=${to}&from=${from}&amount=${amount}`)
        .pipe(
            take(1),
            map((res: ConvertResponse) => {                
            if(res.success) {
                return res;                                 
                } else {                                   
                return null;                                 
                }
        })).subscribe((res: any) => {
            console.log(res);
            setResult(res.result);    

        });                           
        
        return () => {
            subscription.unsubscribe();                           
        }; 
    }

    useEffect(() => {                           
        // convertCurrency()
        // const subscription = ApiService.get(`/fixer/symbols`)
        // .pipe(
        //     take(1),
        //     map((res: any) => {
        //         console.log(res);
                
        //     if(res.success) {
                // setRecords(res.)
        //         return Object.keys(res.symbols);                                 
        //         } else {                                   
        //         return [];                                 
        //         }
        // })).subscribe((data: any) => {
        //     // setEmployees(employees);   
        //     setSymbols(data) 
        //     console.log(data);
                                     
        // });                           
        
        // return () => {
        //     subscription.unsubscribe();                           
        // }; 

        const subscription = ApiService.get(`/fixer/latest?base=${from}`)
        .pipe(
            take(1),
            map((res: any) => {                
            if(res.success) {
                const data: any = Object.entries(res.rates)
                setRecords(data)
                props.setRecent(data.slice(0,8))
                
                return Object.keys(res.symbols);                                 
                } else {                                   
                return [];                                 
                }
        })).subscribe((data: any) => {
            console.log(data);
                                     
        });                           
        
        return () => {
            subscription.unsubscribe();                           
        }; 
                             
        }, []);

  return (
    <ConverterStyle >
        <div className="amount">
            <Input type='number' onChange={(e: number) => e <= 0 ? [setAmount(e), setResult(0), setDisableForm(true)] : [setAmount(e), setResult(0), setDisableForm(false)]} placeholder='Enter Amount' label='Amount' value={amount}/>
            <div className="inRes">{amount} {' '} {from} = {result > 0 && <>{result} {' '} {to}</>}</div>
        </div>
        <div className="details">
            <div className="both">
                <div>
                    <div className="label">From</div>
                    <select onChange={(e) => setFrom(e.target.value)} value={from} disabled={disableForm}>
                    {symbols.map((symbol: string) => (
                       <option key={symbol} value={symbol}>{symbol}</option>
                    ))}
                    </select>
                </div>
                <div className="swap" onClick={() => swap()}>Swap</div>
                <div>
                    <div className="label">To</div>
                    <select onChange={(e) => setTo(e.target.value)} value={to} disabled={disableForm}>
                        {symbols.map((symbol: string) => (
                        <option key={symbol} value={symbol}>{symbol}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="but" onClick={() => convertCurrency()}><Button disabled={disableForm}>Convert</Button></div>
            <div className="foot">
                <div className="result">{result} {' '} {to}</div>
                <div className="more"><div className="but"><Button disabled={disableForm}>More Details</Button></div></div>
            </div>
        </div>
    </ConverterStyle>
  );
}