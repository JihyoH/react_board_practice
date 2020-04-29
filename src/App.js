import React, { Component } from 'react';
import TOC from './components/TOC';
import './App.css';
import './styles/Common.scss';

class App extends Component{
  constructor(props) { // 제일 먼저 실행되어 초기화를 담당.
    super(props);
    this.state = {
      currstate: 0,
      customers:''
    }; 

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  clickHandler =(e) =>{
    e.preventDefault();
    this.setState({
      currstate:this.state.currstate+1
    });
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    console.log("1. ");
    console.log(body);
    return body;
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
