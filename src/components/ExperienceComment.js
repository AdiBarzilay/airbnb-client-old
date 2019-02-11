import React from 'react';
import styled from 'styled-components/macro';

const ExperienceContent = ({single_comment = {} }) => {

    // const exp_data = comments[0] && comments[0];
    const {comment,avatar,first_name,month,year,stars} = single_comment;

    return (
     
        <Container>
            {/* <ReviewContainer> */}
                <Wrap>
                    <div>
                        <Avatar src={avatar}/>
                    </div>
                    <User>
                        <UserDetail>
                            <UserName> {first_name} </UserName>
                            <Date>{month}, {year}</Date>
                        </UserDetail>
                        <div>
                            <Stars>{stars}*****</Stars>
                        </div>
                    </User>
                </Wrap>
                <Comment>{comment}</Comment>   
            {/* </ReviewContainer> */}
            <Line/>
        </Container>
    )
}

export default ExperienceContent;

const Wrap = styled.div`
    display:flex;
    margin-bottom: 20px;
    
`;
const User = styled.div`
    margin-left: 16px;
`;
const UserDetail = styled.div`
    display:flex;
    flex-direction:row;
`;
const Container = styled.div`
        /* width: 100vw; */
        display: flex;
        flex-direction:column;
        /* margin-right: 24px; */
        /* width: 100%; */

      @media (min-width: 743px) {
            /* width: 100vw; */
            padding-left: 24px;
            /* padding-left: 48px; */
        } 

        @media (min-width: 1028px) {  
        }
 
        @media (max-width: 1779px) and (min-width: 1510px) {
        } 

`;
const Avatar = styled.img`
        height: 48px;
        /* margin-right: 6px; */
        border-image: none;
        border-radius: 50%;
        background-color: #d3d3d36b;
`;
const UserName = styled.div`
    /* display: flex; */
    margin-right: 10px;
    font-weight: 600;
`;
const Comment = styled.div`
`;

const Date = styled.div`
        color: #008489;
`;
const Stars = styled.div`
width: 100%;
`;
// const ExperiencesName = styled(ExpTitle)`
//         /* margin-right: 24px;  */
//         margin-bottom:20px;
//         @media (min-width: 743px) {
//             font-size: 4.6rem;
//         }

//         @media (min-width: 1028px) {  
//         }
 
//         @media (max-width: 1779px) and (min-width: 1510px) {
//         }
// `;
// const ReviewContainer = styled.div`
//         display: flex;
//         flex-direction:column;
//         padding-left: 24px;
//         padding-right: 24px;
//         width: 100%;
// `;
const Line = styled.hr`
    color:black;
    height: 0px ;
    width: 100%;
    /* border-width: 1px 0px 0px; */
    /* border-image: initial; */
    border-top: 1px solid rgb(235, 235, 235);
    margin: 40px 0 40px 0;
`;
