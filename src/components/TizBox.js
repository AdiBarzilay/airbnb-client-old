import React from 'react';
import styled from 'styled-components/macro';
import { SubTitle } from '../common/styled.components'; 


const TizBox = () => {
    return (
    
        <Container>
            <Img src='images/pic-1.jpg'/>
            <SubTitle>Homes</SubTitle>
        </Container>
           
    )
}

export default TizBox;

const Container = styled.div`
        width: 100%;
        border: 1px solid lightgray;
        margin: 5px;
`;

const Img = styled.img`
          object-fit: contain;
          width: 100%;
`;
// const Subtitle = styled.p`
//         font-weight: bold;
//         font-size: 1.4rem;
//         text-align: left;
//         padding-left:10px;
//         padding-bottom: 5px;
// `;