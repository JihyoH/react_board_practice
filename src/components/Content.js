import React, { Component } from 'react';


class Content extends Component{
  constructor(props) { // 제일 먼저 실행되어 초기화를 담당.
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = { // state 값 초기화
      title: this.props.title,
      currstate: this.props.currstate
    }; 

    this.loadHandle = this.loadHandle.bind(this);
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
            <div className="currState">페이지 전환 효과</div>
            <div className="currState">DB 연결</div>
          </div>
        </div>

        <div className="contentWrapper">
          <h2>{this.props.title}</h2>
          <p>프로젝트의 기본 구조는 다음과 같습니다.</p>
          
          <ul className="srcHierachy">
            <li className="folder">src
              <ul>
                <li className="folder">components
                  <ul>
                    <li>TOC.js</li>
                    <li>Subject.js</li>
                    <li>Content.js</li>
                  </ul>
                </li>
                <li className="folder">images
                  <ul>
                      <li>image files...</li>
                    </ul>
                </li>
                <li className="folder">styles
                  <ul>
                    <li>Common.scss</li>
                  </ul>
                </li>
                <li>App.js</li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
    )
  }
}
  

export default Content;
