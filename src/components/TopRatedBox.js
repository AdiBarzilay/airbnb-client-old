import React from 'react';
import styled from 'styled-components/macro';
// import { Title } from '../common/styled.components'; 
import { SubTitle } from '../common/styled.components'; 
import { Link } from "react-router-dom";

const PrevBox = ({single_experience}) => {
    const {description,experience_name,reviews,location,img_url,price,ratig_score,_id} = single_experience;
    return (
        
        <Container>
            <ItemLink to={"/experience/"+_id}>
            <Img src={img_url}/>
            <Description>{description} · {location}</Description>
            <ExperienceName>{experience_name}</ExperienceName>
            <Price>₪{price} per person</Price>
            <Rating>
                <Score>{ratig_score}</Score> 
                <Stars>*****</Stars> 
                <Reviews>{reviews}</Reviews>
            </Rating>
            </ItemLink>
        </Container>
           
    )
}

export default PrevBox;

const ItemLink = styled(Link)`
        color: rgb(27,27,27);
        text-decoration: none;
`;
const Container = styled.div`
        position: relative; 
        margin-block-start: 20px;
        margin-right: 10px;
        width: 42vw;
       
       @media (min-width: 743px) and (max-width: 970px){
            width: 45.9vw;
            
       }
       @media (min-width: 971px) {
            width: 27.9vw;
       }
       @media (min-width: 10258px) {
            width: 28.9vw;
       }
       @media (min-width: 1240px) {
            width: 21.5vw;
       }
      
       @media (min-width: 1500px) {
        width: 16.9vw;
       }

       @media (min-width: 1700px) {
        width: 14.89vw;
       }

`;
const ExperienceName = styled(SubTitle)`
                max-height: 44px;
                overflow: hidden ;
                white-space: normal;
                text-overflow: ellipsis;
                  

    @media (min-width : 743px){
    }

    @media (min-width: 1028px){

    }
`;
const Img = styled.img`
          border-radius: 3px;
          width: 100%;
         
          object-fit: cover;
          overflow: hidden;
          min-height: 120px;
          max-height:150px;
`;
const Description = styled.div`
          text-transform: uppercase;
          color: #a25f08;
          font-size: 12px;
          font-weight: 700;
          padding-top: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;  
          overflow: hidden; 
`;
const Price = styled.p`
            font-size: 1.4rem;
`;
const Score = styled.span`
       color: #008489;
       padding-right: 5px;
`;
const Rating = styled.div`
        font-size: 1.2rem;
        font-weight: 600;
`;
const Stars = styled.span`
            color: #008489;
            padding-right: 5px;
`;
const Reviews = styled.span`

`;
