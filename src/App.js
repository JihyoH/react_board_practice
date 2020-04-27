import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component{
  constructor(props) { // 제일 먼저 실행되어 초기화를 담당.
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = { // state 값 초기화
      subject: 'title',
      content: 'content'
    }; 
  }

  render(){
    return (
      <div className="App">
        <div><TOC/></div>
        <div>제목은 나올때도 있고 아닐때도 있고<Subject title={this.state.subject} sub={this.state.content}/></div>
        <div>내용은 매번 나오는데 때마다 달라짐. 레이아웃도 달라지니까 몇가지 버전이 있어야 할듯<Content title={this.state.subject} sub={this.state.content}/></div>
      </div>
    );
  }
}

export default App;
