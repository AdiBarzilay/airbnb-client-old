import React from 'react';
import styled from 'styled-components/macro';
import {ExpTitle} from '../common/styled.components'
// import { ExpText } from '../common/styled.components'; 
import { ExpSubTitle } from '../common/styled.components'; 
import { Link } from "react-router-dom";


const ExperienceContent = ({data = {} }) => {

    // const exp_data = data[0] && data[0];
    const {description,experience_name,location,duration,includes,language,host_name,about_host,host_avatar,host_provides,guest_brings,more_info,host_activity } = data;

    return (
     
        <Container>
            <Type>{description}</Type>
            <ExperiencesName>{experience_name}</ExperiencesName>
            <Wrap>
                <ExpDetail>
                    <Icon src="https://img.icons8.com/material/22/484848/marker.png"/> <Location to=''>{location}</Location>
                </ExpDetail>
                <ExpDetail>
                    <Icon src="https://img.icons8.com/material/22/484848/watches-front-view.png"/> {duration} hours total
                </ExpDetail>
                <ExpDetail>
                    <Icon src="https://img.icons8.com/material/22/484848/spiral-bound-booklet.png"/> {includes}
                </ExpDetail>
                <ExpDetail>
                    <Icon src="https://img.icons8.com/material/22/484848/speech-bubble-with-dots.png"/> Offered in {language}
                </ExpDetail>
            </Wrap>

            <Line/>

            <FiveStarsBanner>
                <FiveStarsIcon src="https://a0.muscache.com/airbnb/static/9ee78aa12d1a51a64b1dc566a4391ba5.gif"/>
                <FiveStarsText>Over 530 people rated this experience 5 stars.</FiveStarsText>
            </FiveStarsBanner>

            <Line/>

            <AboutHost>
                <ExpSubTitle>About your host</ExpSubTitle>
                <HostWrap>
                    <HostText>{about_host}</HostText>
                    <HostSide>
                        <HostImg src={host_avatar}/>
                        <div>
                            <HostName>{host_name}</HostName>
                            <ContactHost to=''>Contact host</ContactHost>
                        </div>
                    </HostSide>
                </HostWrap>
            </AboutHost>

            <Line/>

            <ExpSubTitle>What we’ll do</ExpSubTitle>
            <div>{host_activity}</div>
            <Line/>
            <ExpSubTitle>What else you should know</ExpSubTitle>
            <div>{more_info}</div>
            <Line/>
            <ExpSubTitle>What I’ll provide</ExpSubTitle>
            <div>
                <div>{host_provides}</div>
            </div>
            <Line/>
            <ExpSubTitle>What to bring</ExpSubTitle>
            <div>
                <div>{guest_brings}</div>
            </div>
            
        </Container>
         
    )
}

export default ExperienceContent;

const Wrap = styled.div`
`;
const Container = styled.div`
        width: 100%;
        margin-left: 24px;
        /* padding-right: 24px; */

        @media (min-width: 743px) {
            padding-left: 24px;
        }

        @media (min-width: 1028px) {  
        }
 
        @media (max-width: 1779px) and (min-width: 1510px) {
        }

`;
const Icon = styled.img`
        height: 22px;
        margin-right: 6px;
        border-image: none;
`;
const ExpDetail = styled.div`
        display:flex;
        align-items: center;
        margin-top: 8px;
        line-height: 3rem;
`;
const Location = styled(Link)`
        color: #008489;
`;
const Type = styled.div`
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 700;
`;
const ExperiencesName = styled(ExpTitle)`
        /* margin-right: 24px;  */
        margin-bottom:24px;

    @media (min-width: 743px) {
        font-size: 4.8rem;
        }

    @media (min-width: 1028px) {  
        }
 
    @media (max-width: 1779px) and (min-width: 1510px) {
        }
`;
const FiveStarsBanner = styled.div`
    display: flex;
    align-items: center;
        
`;
const FiveStarsText = styled.div`

`;
const FiveStarsIcon = styled.img`
    border-image: none;
    width: 40px;
    margin-right: 8px;
`;
const Line = styled.hr`
    color:black;
    height: 0px ;
    width: 100%;
    /* border-width: 1px 0px 0px; */
    /* border-image: initial; */
    border-top: 1px solid rgb(235, 235, 235);
    margin: 40px 0 40px 0;
`;
const AboutHost = styled.div`

`;
const HostWrap = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 743px) {
        flex-direction: row;
        margin-top: 0;
    }
`;
const HostText = styled.div`

    @media (min-width: 743px) {
        flex: 3;
        }
`;
const HostSide = styled.div`
       display:flex;
       justify-content: space-between;
       flex-direction: row-reverse;
       border: 1px solid #EBEBEB;
       border-radius: 8px;
       padding: 16px;
       margin-top: 32px;
       

       @media (min-width: 743px) {
        flex-direction: column;
        border: none;
        flex: 1;
        margin-top: 0px;
        padding-top: 0px;
        align-self: center;
        text-align: center;
        align-items: center;
       }
`;

const HostImg = styled.img`
        background-color: lightgray;
        border-radius: 50%;
`;
const HostName = styled.div`
        font-weight: 600;
`;
const ContactHost = styled(Link)`
        color: #008489;
        font-size: 1.6rem;
`;