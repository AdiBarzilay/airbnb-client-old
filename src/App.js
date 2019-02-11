import React, { Component } from 'react';
// import React, { Switch, Component } from 'react';
import styled from 'styled-components/macro'
import GlobalStyle from './styled/global.styles'
import TopBar from './components/TopBar';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Place from './components/Place';
import Home from './components/Home';
import Experience from './components/Experience'

import {
  // BrowserRouter,
  HashRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {

  state = {  
    experiences:[],
    cities:[],
    comments:[],
    pos:'sticky',
    over: 'visible',
    posi: 'relative'
  }

  async componentDidMount(){
    try{
      const response = await fetch('/api/experiences/'); //API_URL  or /api/experiences/  
      const data = await response.json();
      // console.log('root experiences',data.length)
      this.setState({experiences:data})
    }catch(err){
      console.log(err.message)
    }

    try{
        const response = await fetch('/api/cities/'); //API_URL + '/cities/' or /api/cities/ 
        const data = await response.json();
        // console.log('root cities',data.length)
        this.setState({cities:data})
      }catch(err){
        console.log(err.message)
      }

    try{
        const response = await fetch('/api/comments/'); 
        const data = await response.json();
        // console.log('root comments',data.length)
        this.setState({comments:data})
      }catch(err){
        console.log(err.message)
      }
  }

  update_body = (over) =>{
    // console.log('over',over)
    this.setState({
      over
    })
  }

  update_body_posi = (posi) =>{
    // console.log('over',over)
    this.setState({
      posi
    })
  }

  update_topbar = (pos) =>{
    // console.log('topBar111',pos)
    this.setState(pos)
  }

  render() {
    // console.log('app wrap overflow:', this.state.over)
    // console.log('app wrap position:', this.state.posi)

    return (
      <Router>
        <AppWrap over={this.state.over} posi={this.state.posi}>
          <TopBar pos={this.state.pos} over={this.state.over} update_body={this.update_body} update_body_posi={this.update_body_posi} posi={this.state.posi}/>
          {/* <TopBar {...this.state.pos}/> */}
          <Route exact path="/" render={()=> <Home experiences={this.state.experiences} cities={this.state.cities}/>}/>
          <Route path="/experience/:id" render={({match})=> <Experience topbar_cb={this.update_topbar} cities={this.state.cities} exp_id={match.params.id} experiences={this.state.experiences} comments={this.state.comments} />} />
          <Route path="/place" component={Place} />
          <Route path="/categories" component={Categories}/>
          
          <Footer/>
          <GlobalStyle/> 
        </AppWrap>
      
      </Router>
    );
  }
}

export default App;


const AppWrap = styled.div`
      overflow: ${props=> props.over};
      position: ${props=> props.posi};
`;