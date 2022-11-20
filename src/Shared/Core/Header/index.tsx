import React from "react";
import { HeaderStyle } from './style'
import Button from '../../Components/Button'
import { Link, useNavigate } from "react-router-dom";




export default function Header() {

    const navigate = useNavigate();


  return (
    <HeaderStyle >
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'><div className="logo"> <span className="logoC">C</span>on<span className="logoC">v</span>er<span className="logoC">t</span>er</div></Link>
            <div className="navs">
                <Link style={{textDecoration: 'none'}} to='/details/EUR/USD/1'><Button>EUR-USD Details</Button></Link>
                <Link style={{textDecoration: 'none'}} to='/details/EUR/GDB/1'><Button>EUR-GDB Details</Button></Link>
            </div>
        </div>
        
    </HeaderStyle>
  );
}