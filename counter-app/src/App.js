import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0
    };
  }

  //render
  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button>+</button>
        <button>-</button>
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
