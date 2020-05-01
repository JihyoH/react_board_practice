import React, { Component } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';


class Content extends Component{
  constructor(props) { // 제일 먼저 실행되어 초기화를 담당.
    super(props);
    this.state = { // state 값 초기화
      title: this.props.title,
      currstate: this.props.currstate
    }; 

    this.loadHandle = this.loadHandle.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.currstate !== prevProps.currstate) {
          this.setState({
            currstate : this.props.currstate
          });
    }
    this.loadHandle();
  }

  componentDidMount(){
    this.loadHandle();
  }

  loadHandle =() =>{
    const currStateTarget = document.getElementsByClassName('currStateWrapper')[0].children;
    
    for(let i=0; i<currStateTarget.length; i++ ){
      if(i === this.state.currstate-1){
        currStateTarget[i].classList.add("lightOn");
      }else{
        currStateTarget[i].classList.remove("lightOn");
      }
    }
  }

  renderSwitch(param){
    switch(param){
      case 1:
        return (
            <Content1/>
        );
      case 2:
        return (
            <Content2/>
        );
      case 3:
        return (
            <Content3/>
        );
      case 4:
        return (
            <Content4/>
        );
      default:
        return (
          <div>
            <Content1/>
            <Content2/>
            <Content3/>
            <Content4/>
          </div>
        );
    }
  }  

  render(){
    return(
      <div>
        <div className="contentWrapper">
          <div className="currStateTitle">
            진행상황
          </div>
          <div className="currStateWrapper">
            <div className="currState">기본 레이아웃 설계</div>
            <div className="currState">간단한 자바스크립트 효과</div>
            <div className="currState">내용물 바꾸기</div>
            <div className="currState">DB 연결</div>
          </div>
        </div>

        <div className="contentWrapper">
          <h2>{this.props.title}</h2>
          <p className="subDescription">* 까만 박스 안의 소스는 설명에 필요한 최소한의 부분만을 가져온 것이므로, 필요한 경우 <a href="https://github.com/JihyoH/react_board_practice">react_board_practice</a>에서 소스 전문을 확인하시기 바랍니다.</p>
          {this.renderSwitch(this.state.currstate)}
        </div>
      </div>
    )
  }
}
  

export default Content;
