import React from "react";
import { ConverterStyle } from './style'
import Button from '../../Components/Button'
import Input from '../../Components/TextBox'
import Select from '../../Components/Dropdown'



export default function Converter() {

  return (
    <ConverterStyle >
        <div className="amount">
            <Input />
            <div className="inRes">1.0 EUR = XXX.X USD</div>
        </div>
        <div className="details">
            <div className="both">
                <div>
                    <div className="label">From</div>
                    <Select />
                </div>
                <div>
                    <div className="label">To</div>
                    <Select />
                </div>
            </div>
            <div className="but"><Button>Convert</Button></div>
            <div className="foot">
                <div className="result">XX.XX USD</div>
                <div className="more"><div className="but"><Button>More Details</Button></div></div>
            </div>
        </div>
    </ConverterStyle>
  );
}