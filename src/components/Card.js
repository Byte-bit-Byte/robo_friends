import React, { Component } from 'react';



class Card extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
    <div className='tc bg-light-green br3 ma2 pa3 grow bw2 shadow-5 dib'>
    {/*tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-100 w-80-m w-25-l*/}
      <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt={`robo version of ${this.props.name}`} />
    {/* src={`https://robohash.org/set_setany/${this.props.id}?size=200x200`} alt={`robo version of ${this.props.name}`} */}
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    </div>
  );
  }  
}

export default Card;