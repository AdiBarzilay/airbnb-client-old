import React, { Component } from 'react';
// import React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../common/styled.components'; 
import TopRatedBox from './TopRatedBox';

class TopRated extends Component {

    state = {
        experiences_data : [],
        count:0
    }
    static getDerivedStateFromProps(nextProps,state){
        // console.log('state: ' , state);
        // console.log('nextProps: ' , nextProps);
        const viewport_width = window.innerWidth;
        // console.log('innerWidth: ' + viewport_width);
        let items_num = 4; //4 // 
        if(viewport_width > 1700){
            items_num = 6; 
        }else if(viewport_width > 1500){
            items_num = 5;
        }else if(viewport_width > 1240){
            items_num = 8;
        }else if(viewport_width > 970){
            items_num = 6;
        }
        // console.log('items_num: ' + items_num);
        // console.log('exp length: ' + nextProps.experiences.length);
        // console.log('-----------------------------')
        return { 
            ...state,
            experiences_data : nextProps.experiences.concat().splice(0,items_num) 
        }
    }
    componentDidMount(){
        window.addEventListener('resize',this.resize)
    }
    resize = ()=>{
        this.setState({ count : this.state.count+1})
    
    }

    render(){
        // const {experiences = []} = this.props;
        return (
                <Wrap>
                    <Title>Top-rated experiences<SubTitle>Book activities led by local hosts on your next trip</SubTitle></Title>
                    
                    <Container>
                        {
                            this.state.experiences_data.map(exp=>{
                                return <TopRatedBox single_experience={exp}/>
                            })
                        }
                        
                    </Container>
                    <ButtonWrap>
                        <Button>Show all experiences</Button>
                    </ButtonWrap>
                </Wrap>        
    )}
    
    }

export default TopRated;

const Container = styled.div`
        display: flex;
        align-content:center;
        flex-wrap:wrap;
        flex-direction:row;
`;
const Wrap = styled.div`
        overflow-x: hidden;
        margin-top: 32px;
`;
const ButtonWrap = styled.div`
        display: flex;
`;
const Button = styled.button`
        align-items: center;
        background: none;
        border: #008489 1px solid;
        border-radius: 4px;
        width: 100%;
        margin-top: 32px;
        margin-bottom: 32px;
        margin-right: 22px;
        padding: 14px;
        color: #008489;
        font-weight: 600;
`;
const SubTitle = styled.div`
        font-size:1.5rem;
        font-weight: 400;
`;

