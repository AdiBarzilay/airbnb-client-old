import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Title } from '../common/styled.components'; 
import CityBox from './CityBox';

class Recommended extends Component {

    // const exp_data = data[0] && data[0];
    // const {description,experience_name,location,duration,includes,language,about_host,host_provides,guest_brings,more_info,host_activity } = data.length > 0 ? data[0] : {};
    render(){

        return (
            <Wrap>
                <Title>Recommended for you</Title>
                <Container>
                    {
                        this.props.cities.map(city=>{
                            return <CityBox single_city={city}/>
                            })
                        }
                </Container>
            </Wrap>        
        )}
}

export default Recommended;

const Container = styled.div`
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-top: 20px;
        
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
            }
`;
const Wrap = styled.div`
       
`;
