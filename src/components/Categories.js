import React from 'react';
import styled from 'styled-components/macro';
import CatBox from './CatBox';
import { Title } from '../common/styled.components'; 
// import logo from '../images/airbnb_logo_small.png';
// import { Link } from "react-router-dom";

const Categories = () => {
    return (
    <Wrap> 
        <CatTitle>What can we help you find, Adi?</CatTitle>
        <Container>
            <CatBox img_url='images/pic-1.jpg' category='Homes'/>
            <CatBox img_url='images/asset2.jpeg' category='Experiences'/>
            <CatBox img_url='images/asset3.jpg' category='Restaurants'/>
            {/* <Box>Experience</Box>
            <Box>Restaurants</Box> */}
        </Container>
    </Wrap>
    )
}

export default Categories;


const Container = styled.div`
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        

        @media (min-width: 743px) {

        }
`;
const Wrap = styled.div`
        margin-bottom: 40px;
`;
const CatTitle = styled(Title)`
        margin-bottom: 20px;

       
`;
