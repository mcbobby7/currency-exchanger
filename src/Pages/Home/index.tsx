import React from 'react';
import { Home } from './style'
import Button from '../../Shared/Components/Button'
import Input from '../../Shared/Components/TextBox'
import DropDown from '../../Shared/Components/Dropdown'
import Card from '../../Shared/Components/Card'
import Converter from '../../Shared/Core/Converter'

function App() {
  return (
    <Home>
      <div className='title'>Currency Exchanger</div> 
      <Converter />
     
      <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Home>
  );
}

export default App;
