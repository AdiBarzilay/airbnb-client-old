import React from 'react';
import styled from 'styled-components/macro';
// import logo from '/images/airbnb_logo_small.png';
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <Container>
        <div>
                <Logo src="/images/logo-footer.svg"/>
                <Button>Terms, Privacy, Currency & More</Button>
        </div>
    </Container>        
    )
}

export default Footer;

const Container = styled.footer`
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 13px;
        left: 13px;
        padding-left: 12px;
        height: 40px;
        box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05);
        border-top: 1px solid #EBEBEB;
        border-radius: 5px;
        background-color: #fff;
`;
const Button = styled.button`
        text-transform: uppercase;
        text-align: left;
        color: black;
        font-size: 1.rem;
        font-weight: 700;
        /* padding: 0.1rem 1rem; */
        border-radius: .3rem;
        margin: 0 13px 0 10px;
        background-color: white;
`;
const Logo = styled.img`
        
        width: 16px;
`;