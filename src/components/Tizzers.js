import React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../common/styled.components'; 
import TizBox from './TizBox';
// import logo from '../images/airbnb_logo_small.png';
// import { Link } from "react-router-dom";

const Recommended = () => {
    return (
    <Wrap>
        <Title>Experiences in the spotlight</Title>
        <Container>
            <TizBox/>
            
        </Container>
    </Wrap>        
    )
}

export default Recommended;

const Container = styled.div`
        /* border: 1px solid yellow; */
        display: flex;
        flex-wrap: nowrap;
        /* width: 900px; */
        overflow-x: hidden;
        /* padding-left: 24px; */
        
`;
const Wrap = styled.div`
        overflow-x: hidden;
`;
     