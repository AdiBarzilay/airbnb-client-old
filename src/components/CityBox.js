import React from 'react';
import styled from 'styled-components/macro';
// import { Title } from '../common/styled.components'; 


const CityBox = ({single_city}) => {
        const {city,price,city_pic} = single_city;
        return (
        <Container>   
                <Content>
                        <CityName>{city}</CityName>
                        <Price>₪{price}/night average</Price>                      
                </Content>
                <Gradiant></Gradiant>
                <Img src={city_pic}/>
        </Container>
        
)
        }

export default CityBox;

const Container = styled.div`
        position: relative;  
        margin-right: 10px;
`;
const Content = styled.div`
        position: absolute;
        color: white;
        bottom: 0px;
        left: 0px;
        right: 0px;
        padding-bottom: 32px;
        padding-left: 18px;
        padding-right: 18px;
        text-align: center;
        width: 100%;
        z-index:2;
`;
const CityName = styled.div`
        font-weight: 700;
        font-size: 2rem;
        width: 100%;
`;
const Price =styled.div`
        font-size: 1.6rem;
        line-height: 1.8rem;
        font-weight: 600;
`;
const Gradiant = styled.div`
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
        opacity: 0.6 ;
        position: absolute;
        height: 60%;
        width: 100%;
        left: 0px;
        bottom: 2px ;
        border-radius: 3px;
        z-index:1;
`;
const Img = styled.img`
        width: 41vw;
        border-radius: 3px;

        @media (min-width : 743px){
                width: 30vw;
        }
        @media (min-width: 1128px){
                width: 15vw;
        }

`;