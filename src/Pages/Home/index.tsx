import React, {useState} from 'react';
import { Home } from './style'

import Card from '../../Shared/Components/Card'
import Converter from '../../Shared/Core/Converter'
import Header from '../../Shared/Core/Header';


function HomePage() {

    const [recent, setRecent] = useState([])

   
  return (
    <>
        <Header />
        <Home>
            {/* <div className='title'>Currency Exchanger</div>  */}
            <Converter setRecent={(recent: any) => setRecent(recent)}/>
            
            <div className='cards'>
            
                {recent.map((e: any) => (
                    <Card key={e[0]} name={e[0]} sub={e[1]}/>
                ))}
                
            </div>
        </Home>
    </>
  );
}

export default HomePage;
