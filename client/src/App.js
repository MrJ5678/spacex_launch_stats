/*
 * @Author: hhhhhq
 * @Date: 2020-04-11 21:43:44
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-06-19 10:31:09
 * @Description: file content
 */ 
import React from 'react';
import './App.css';
import logo from './logo.png'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './components/Launches'
import Launch from './components/Launch'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="logo" style={{ width: 300, display: "block",  margin: "auto" }}/>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
