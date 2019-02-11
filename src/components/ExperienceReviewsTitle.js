import React from 'react';
import styled from 'styled-components/macro';

const ExperienceReviewsTitle = ({all_comments}) => (
                    
        <ReviewsTitle>
        {all_comments.length} reviews from people who took this experience
                {/* <Rating>
                <Stars>*****</Stars>
                <Score>4.8</Score>
                </Rating> */}
        </ReviewsTitle>
        
)

export default ExperienceReviewsTitle;

const ReviewsTitle = styled.h1`
        width: 100%;
        font-size: 3.2rem;
        line-height: 3.2rem;
        font-weight: 700;
        margin-bottom: 24px;
        margin-right: 24px;
        max-width: 360px;
        display: block;
        
        @media (min-width: 743px) {
                width: calc(32vw - 48px);
                height: 32vw;
                /* width: 33vw; */
                position: sticky;  
                top: 64px;
                min-width:calc(30vw - 48px);
                /*width: calc(30vw - 48px);
                /* padding-left: 48px; 
                /* padding-right: 24px; */ 
       }
       @media (min-width: 1028px) {
        min-width:calc(32vw - 48px);
        /* width: clac(25% - 5px); */
        
       }

       @media (max-width: 1779px) and (min-width: 1510px) {
        
       }   
`;
