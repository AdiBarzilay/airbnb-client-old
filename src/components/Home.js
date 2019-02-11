import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Categories from './Categories';
import Recommended from './Recommended';
import TopRated from './TopRated';
// import Tizzers from './Tizzers';


class Home extends Component {
    
    
    render(){
        // console.log('home match',this.props.match)
        return (
            <Wrap>
                <Categories/>
                <Recommended cities={this.props.cities} />
                <TopRated experiences={this.props.experiences}/>
                {/* <Tizzers/> */}
            </Wrap>
        )
    }
}

export default Home;

const Wrap = styled.div`
    position: relative;
    margin-left: 24px; 
    flex-direction: column;
    margin-top: 40px;
    /* top: 100px; */
    /* margin-right: 24px; */
    
    @media (min-width: 743px) {
        }
    @media (min-width: 1028px) {
            padding-left: 80px;
        }
    @media (max-width: 1779px) and (min-width: 1510px) {
        }
`;