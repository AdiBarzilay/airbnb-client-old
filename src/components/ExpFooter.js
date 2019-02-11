import React from 'react';
import styled from 'styled-components/macro';
// import { Link } from "react-router-dom";

const ExpFooter = ({data = {} }) => {

    const {description,host_avatar,price,ratig_score,reviews } = data;

    return (
    <Container>
        <Wrap>
            <Avatar src={host_avatar}/>
            <div>
            <Description>{description}</Description>
                <Rating>
                    <Score>{ratig_score}</Score> 
                    <Stars>*****</Stars> 
                    <Reviews>{reviews}</Reviews>
                </Rating>
            </div>
            <Price>₪{price} per person</Price>
        </Wrap>
        <Button>See dates</Button>
    </Container>        
    )
}

export default ExpFooter;

const Container = styled.footer`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: fixed;
        width:100%;
        bottom: 0;
        padding-left: 24px;
        height: 70px;
        box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05);
        border-top: 1px solid #EBEBEB;
        background-color: #fff;
        z-index: 10;
        /* margin-left: -80px; */
`;
const Wrap = styled.div`

`;
const Description = styled.div`
          text-transform: uppercase;
          font-size: 11px;
          padding-top: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;  
          overflow: hidden; 
`;
const Button = styled.button`
display:flex;
    height: 60%;
    /* text-transform: uppercase; */
    color: #fff;
    background-color: #ff5a5f;
    font-size: 1.rem;
    padding: 0.1rem 3rem;
    border-radius: .3rem;
    margin: 10px;
`;
const Avatar = styled.img`
        width: 50px;
        background-color: #d3d3d36b;
        border-radius: 50%;
        display: none;
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
