import React from "react";
import { HeaderStyle } from './style'
import Button from '../../Components/Button'



export default function Header() {

  return (
    <HeaderStyle >
        <div className="nav">
            <div className="logo"> <span className="logoC">C</span>on<span className="logoC">v</span>er<span className="logoC">t</span>er</div>
            <div className="navs">
                <Button>EUR-USD Details</Button>
                <Button>EUR-GDB Details</Button>
            </div>
        </div>
        
    </HeaderStyle>
  );
}