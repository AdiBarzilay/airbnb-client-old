import React from 'react';
import styled from 'styled-components/macro';

const Gallery = ({data}) => (
        
        <Container>          
            {data && <Img src={data.img_url} /> }
            {/* {data.map(obj=>{
                return  <Img key={obj._id} src={obj.img_url} width="100px"/>  
            })} */}
        </Container>
        
)

export default Gallery;

const Container = styled.div`
        margin-bottom: 24px;
        margin-right: 24px;
        
        @media (min-width: 743px) {   
                /* padding-left: 48px;
                padding-right: 24px; */
       }
        @media (min-width: 1028px) {
        /* width: clac(25% - 5px); */  
       }
        @media (max-width: 1779px) and (min-width: 1510px) {
       }

`;

const Img = styled.img`
        width: 100vw;
        /* height: 50vh; */
        object-fit: cover;
        overflow: hidden;
               
        @media (min-width: 743px) {
                width: calc(30vw - 48px);
                height: 32vw;
                /* width: 33vw; */
                position: sticky;  
                top: 0px;
       }
       @media (min-width: 1028px) {
        /* width: clac(25% - 5px); */
                width: calc(32vw - 48px);
                height: 34vw;
       }

       @media (max-width: 1779px) and (min-width: 1410px) {
        
       }
`;