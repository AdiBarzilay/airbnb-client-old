import React, { Component } from 'react';
// import './App.css';
import styled from 'styled-components'
import GlobalStyle from './styled/global.styles'

import TopBar from './components/TopBar';
import Categories from './components/Categories';
import Recommended from './components/Recommended';
import Footer from './components/Footer';
import Place from './components/Place.view';
import Home from './components/Home';
import Experience from './components/Experience'

import {
  BrowserRouter,
  HashRouter as Router,
  Route
} from 'react-router-dom';

require('dotenv').config();

// const API_URL = process.env.REACT_APP_API_URL

class App extends Component {
  state = {
    experiences:[]
  }
  async componentDidMount(){
    try{
      const response = await fetch('/api/experiences/'); //API_URL    
      const data = await response.json()
      this.setState({experiences:data})
    }catch(err){
      console.log(err.message)
    }
  }
  // get_all_users = async ()=> {
  //   try{
  //     const response = await fetch(API_URL+'/users');
  //     const data = await response.text()
  //     this.setState({msg:data})
  //   }catch(err){
  //     console.log(err.message)
  //   }
  // }
 
  render() {
    return (
      <div className="App">
       {
              this.state.experiences.map(exp=>{
                const {description,experience_name,reviews,location,img_url} = exp;
                return (
                  <div>
                      <h3>{description}</h3>
                      <h3>{experience_name}</h3>
                      <h3>{reviews}</h3>
                      <h3>{location}</h3>
                      <img src={img_url} width="250" />    
                  </div>
                )
              })
            }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />     
            {
              this.state.experiences.map(exp=>{
                const {description,experience_name,reviews,location,img_url} = exp;
                return (
                  <div>
                      <h3>{description}</h3>
                      <h3>{experience_name}</h3>
                      <h3>{reviews}</h3>
                      <h3>{location}</h3>
                      <img src={img_url} width="250" />    
                  </div>
                )
              })
            }
        </header>
      </div>
    );
  }
}
// {
//   "_id":"5c239b47b6f04d5748c53586",
//   "description":"Books",
//   "experience_name":"amet nunc viverra dapibus",
//   "ratig_score":4.9,
//   "reviews":223,
//   "location":"Margos",
//   "includes":"Books",
//   "language":"Persian",
//   "duration":4,
//   "img_url":"https://picsum.photos/820/980/?image=47"
// }

export default App;
