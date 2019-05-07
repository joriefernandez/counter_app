import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0
    };
  }

  handlePlus = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({count});
  };

  handleMinus = e => {
    e.preventDefault();
    let count = this.state.count - 1 ;
    this.setState({count});
  }

  //render
  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}
export default App;
