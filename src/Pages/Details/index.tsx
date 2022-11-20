import React, {useEffect, useState} from 'react';
import { Details } from './style'

import Card from '../../Shared/Components/Card'
import Converter from '../../Shared/Core/Converter'
import Header from '../../Shared/Core/Header';
import Chart from '../../Shared/Components/Chart'
import { ApiService } from "../../Shared/Core/Services";
import { take, map } from "rxjs/operators";
import { Body } from "../../Shared/Core/Utils/Types";
import { useParams } from 'react-router-dom';


function DetailsPage() {

    const [recent, setRecent] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const {fromCurrency, toCurrency, toAmount}= useParams()


    const getHistory = () => {
        const subscription1 = ApiService.get(`/fixer/timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${toCurrency}&base=${fromCurrency}`)
        .pipe(
            take(1),
            map((res: any) => {
                console.log(res);
                
            if(res.success) {
                // setMainSymbols(res.symbols)
                return Object.keys(res.symbols);                                 
                } else {                                   
                return [];                                 
                }
        })).subscribe((data: any) => {
            // setEmployees(employees);   
            // setSymbols(data) 
            console.log(data);
                                     
        });  
        return () => {
            subscription1.unsubscribe();                         
        }; 
    }

    useEffect(() => {   
                                
       
    }, []);

   
  return (
    <>
        <Header />
        <Details>
            {/* <div className='title'>Currency Exchanger</div>  */}
            <Converter setRecent={(recent: any) => setRecent(recent)}/>
            
            <div className='chart'>
            
                <Chart />
            </div>
        </Details>
    </>
    
  );
}

export default DetailsPage;
