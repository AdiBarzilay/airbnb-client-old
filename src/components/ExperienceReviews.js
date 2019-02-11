import React from 'react';
import styled from 'styled-components/macro';

const ExperienceReviews = ({single_comment = {} }) => {

    // const exp_data = data[0] && data[0];
    const {comment,first_name,year} = single_comment;
    return (
     
        <Container>
            <ReviewContainer>
                <User>{first_name}</User>
                <Review>{comment}</Review>
                {year}
            </ReviewContainer>

        </Container>
     
    )
}

export default ExperienceReviews;

const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        
        font-size: 1.8rem;

        @media (min-width: 743px) {
            flex-direction:row;  
        }
        @media (min-width: 1028px) {

        }
        @media (max-width: 1779px) and (min-width: 1510px) {
        }
`;
const TitleWrap = styled.div`
        margin-top: 0px;
        padding-left: 24px;
        padding-right: 24px;
`;
const Title = styled.div`
        font-size: 3.2rem;
        padding-top: 0px;
        font-weight: 700;
        @media (min-width: 743px) {
            width: 33vw;
            
        }
        @media (min-width: 1028px) {

        }
        @media (max-width: 1779px) and (min-width: 1510px) {
        }
`;
const Rating = styled.div`

`;
const Stars = styled.div`

`;
const Score = styled.div`

`;
const ReviewContainer = styled.div`
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
`;
const User = styled.div`

`;
const Review = styled.div`

`;