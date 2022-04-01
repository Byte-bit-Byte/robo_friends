import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
  }  

  handleChange(event){
    this.setState({
      searchfield: event.target.value
    });
  }

  // addRobot(event){

  // }

  render(){
    const {robots, searchfield } = this.state;
    const filteredRobots = robots
    .filter(robot => {
                      return(robot.name
                        .toLowerCase()
                        .includes(searchfield.toLowerCase()))
                    });
    if(robots.length === 0){
      return <h1 className='tc'> Hold up </h1>
    }
    else{
        return (
        <div className='tc'  style={{overflow: 'hidden'}}>
          <h1 className='f1'>Robo Friends</h1>
          <SearchBox searchChange={this.handleChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;