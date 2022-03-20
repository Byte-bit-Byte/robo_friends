import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


class Hello extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
    <div className="f1 tc">
      <header className="Hello-header">
      </header>
      <h1>Hello World</h1>
      <p> Welcome to React</p>
    </div>
  );
  }  
}

export default Hello;