import React, { Component } from 'react';
import isNumber from '../logic/isNumber';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculator from '../logic/calculator';
class App extends Component {
    state={
      total:null,
      next:null,
      operation:null
    }
  render() {
    this.ClickHander=this.ClickHander.bind(this);
    return (
      <div className="App">
        <Display value={this.state.next || this.state.total || "0"}/>
        <ButtonPanel ClickHander={this.ClickHander} />
      </div>
    );
  }
  ClickHander(item){
    this.setState(calculator(this.state,item))
  }
}

export default App;