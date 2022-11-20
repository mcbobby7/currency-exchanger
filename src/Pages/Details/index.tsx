import React, {useState} from 'react';
import { Details } from './style'

import Card from '../../Shared/Components/Card'
import Converter from '../../Shared/Core/Converter'
import Header from '../../Shared/Core/Header';


function DetailsPage() {

    const [recent, setRecent] = useState([])

   
  return (
    <>
        <Header />
        <Details>
            <div className='title'>Currency Exchanger</div> 
            <Converter setRecent={(recent: any) => setRecent(recent)}/>
            
            <div className='chart'>
            
                
            </div>
        </Details>
    </>
    
  );
}

export default DetailsPage;
