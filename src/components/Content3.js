import React, { Component } from 'react';


class Content3 extends Component{
  render(){
    return(
        <div>
            <p>탭메뉴 버튼들을 누르면 내용들이 바뀌죠.</p>
            <p>이번에는 이에 대해 설명을 해볼까 합니다.</p>

            <div className="srcHierachy">
                <p>대략적인 구조는 다음과 같습니다.</p>
                <p>탭버튼을 누르면 TOC 컴포넌트에서 state에 변경이 일어나요(handleClick 함수 실행).</p>
                <p>Content 컴포넌트에서는 이를 props로 받아서 this.state.currstate에 적용합니다.</p>
                <p className="subDescription">* state 의 변경에 따른 처리는 componentDidUpdate 를 통해 이루어집니다.</p>
    <pre className="codeView">{`componentDidUpdate(prevProps, prevState){
  if (this.props.currstate !== prevProps.currstate) {
    this.setState({
      currstate : this.props.currstate
    });
  }
}`}
    </pre>
                <p>state의 변경이 감지되면 Content 컴포넌트의 renderSwitch 함수를 통해 className이 contentWrapper인 div 태그 안에 필요한 내용을 뿌려줍니다.</p>
                <pre className="codeView">{`renderSwitch(param){
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
  }`}</pre>
                <pre className="codeView">{`render(){
    return(
      <div>
          {this.renderSwitch(this.state.currstate)}
      </div>
    )
  }`}</pre>
                <p>render와 마찬가지로 return 값은 하나의 태그 또는 하나의 태그로 감싸여진 내용이어야 합니다.</p>
                <p>이렇게 해서 탭버튼 누를 때마다 내용 바꾸기도 끝!</p>
            </div>
        </div>

    )
  }
}
  

export default Content3;
