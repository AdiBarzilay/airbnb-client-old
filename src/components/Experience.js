import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Gallery from './ExperienceGallery';
import Content from './ExperienceContent';
import ExprienceComments from './ExperienceComment';
import ExperienceReviewsTitle from './ExperienceReviewsTitle'
import Footer from './ExpFooter'

class Experience extends Component {

    componentDidMount(){
        this.props.topbar_cb({pos:'relative'})
        window.scrollTo(0, 0);
        // console.log('topBarProp', this.props.topbar_cb);
    }
    componentWillUnmount(){
        this.props.topbar_cb({pos:'sticky'})
    }

    render(){
        const {exp_id,experiences} = this.props;
        const exp_data = experiences.find(exp=> exp._id === exp_id);

        return (
            <Wrap>
               
                <ExpInfo>
                    <Gallery data={exp_data} />
                    <Content data={exp_data} />
                </ExpInfo>

                <Line/>

                <ReviwsWrap>
                    <ExperienceReviewsTitle all_comments={this.props.comments}/>
                    <ExpComments>
                            {this.props.comments.map(comment=>{
                               
                                return <ExprienceComments single_comment={comment}/>
                                
                            })}
                    </ExpComments>
                </ReviwsWrap>  
                <ExpFooter data={exp_data}/>

            </Wrap>
        )
    }
}
export default Experience;

const Wrap = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        left: 0;
        font-size: 2rem;

        @media (min-width: 743px) {
            padding-top: 20px;
        }
        @media (min-width: 1028px) {
        }
        @media (max-width: 1779px) and (min-width: 1410px) {
            
        }
`;
const ExpInfo = styled.div`
        display: flex;
        flex-direction:column;
        padding-right: 24px;

        @media (min-width: 743px) {
        flex-direction:row;    
        margin-left: 48px;   
        }
        @media (min-width: 1028px) {
            flex-direction:row;    
        }

        @media (max-width: 1779px) and (min-width: 1410px) {
        }
`;
const ReviwsWrap = styled.div`
        display: flex;
        flex-direction:column;
        margin-left: 24px;
        padding-right: 24px;

        @media (min-width: 743px) {
        flex-direction:row; 
        margin-left: 48px;    
        }
        @media (min-width: 1028px) {
        flex-direction:row;    
        }

        @media (max-width: 1779px) and (min-width: 1510px) {
        
        }
`;
const ExpComments = styled.div`
        display: flex;
        flex-direction:column;  
`;
const ExpFooter = styled(Footer)`
       
`;
// const ExpTitle = styled(ExperienceReviewsTitle)`
//         /* position: sticky;   */
// `;
const Line = styled.hr`
    color:black;
    height: 0px ;
    width: 100%;
    /* border-width: 1px 0px 0px; */
    /* border-image: initial; */
    border-top: 1px solid rgb(235, 235, 235);
    margin: 80px 0 80px 0;
`;