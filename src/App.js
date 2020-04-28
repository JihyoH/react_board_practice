import React, { Component } from 'react';
import TOC from './components/TOC';
import './App.css';
import './styles/Common.scss';

class App extends Component{
  constructor(props) { // 제일 먼저 실행되어 초기화를 담당.
    super(props);
    this.state = { // state 값 초기화
      currstate: 1
    }; 

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler =(e) =>{
    e.preventDefault();
    this.setState({
      currstate:this.state.currstate+1
    });
  }

  render(){
    return (
      <div className="App">
        {/* <button onClick={this.clickHandler} >{this.state.currstate}</button> */}
        <TOC currstate={this.state.currstate}/>
      </div>
    );
  }
}

export default App;
