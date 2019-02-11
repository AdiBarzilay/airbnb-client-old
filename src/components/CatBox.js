import React from 'react';
import styled from 'styled-components/macro';


const CatBox = ({img_url, category}) => {
    return (
    
        <Container>
            
             
                 <Img src={img_url}/>
            
            
            <SubTitle>{category}</SubTitle>
        </Container>
           
    )
}

export default CatBox;

const Container = styled.div`
        display:flex;
        flex-flow: column;
        align-items: flex-start;
        border: 1px solid lightgray;
        border-radius: 3px;
        margin-right: 10px;   
        align-items: center;
        width: 138px;
        box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05);

        @media (min-width: 743px) {
            flex-flow: row;
            flex-wrap: nowrap;
            width: 421px;
            height: 72px;
            margin-top: 20px;
            margin-bottom: 20px;
        } 
`;

const Img = styled.img`
          /* object-fit: cover; */
          overflow: hidden;
          width: 100%;
          border: none;
          border-radius:3px 3px 0px 0px;
         
          @media (min-width: 743px) {
            
            border-radius:3px 0px 0px 3px;
            object-fit: cover;
            overflow: hidden;
             width: 138px;
             height: 72px;

        } 
`;
const SubTitle = styled.div`
        display: flex;
        width:100%;
        font-weight: bold;
        font-size: 1.4rem;
        text-align: left;
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 30px;
        align-items: center;

        @media (min-width: 743px) {
            /* padding-top: 20px; */
            padding-top: 0px;
            padding-bottom: 0px;
            
            /* padding-left:10px; */
        }
        @media (min-width: 1028px) {
            font-size: 1.8rem;
        }
        @media (max-width: 1779px) and (min-width: 1410px) {
            
        }
`;