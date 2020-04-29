import React, { Component } from 'react';

class Content2 extends Component{
  render(){
    return(
        <div>
            <p>자바스크립트를 적용해볼까요.</p>
            <div className="srcHierachy">
                <p>2단계에서는 그림이 3초마다 바뀌고 있습니다.</p>
                <p>Subject 라는 컴포넌트에서 setInterval로 3초마다 그림이 변경되도록 해두었죠.</p>
                <p>대략적인 구조는 다음과 같습니다.</p>
                <p>App 에서 처음으로 currstate에 대한 정의가 1로 내려집니다.</p>
        <       pre className="codeView">{`this.state = {
    currstate: 0
    };`}</pre>
                <p>TOC 에서 이를 props로 받아서 this.state.currstate에 적용합니다.</p>
                <pre className="codeView">{`constructor(props) {
    super(props);
    this.state = {
        currstate: this.props.currstate
    };`}</pre>
                <p>이걸 <span className="codeView">{`<Subject currstate={this.state.currstate}/>`}</span> 를 통해 Subject 컴포넌트로 값을 넘깁니다.</p>
                <p>Subject 컴포넌트에서는 currstate라고 넘어온 props의 값이 1보다 크면</p>
                <p>swiperImg라는 함수에 타이머를 씌워서 열심히 그림을 바꿔줍니다</p>
                <pre className="codeView">{`componentDidMount(){
  if(this.props.currstate !== 1){
    this.timer = setInterval(
      () => this.swiperImg(), 3000
    );
  }
}`}</pre>
                <p>componentDidMount 함수는 render가 완료되고 실행됩니다. 따라서 위처럼 사용하면 렌더링을 마치고, 이미지를 바꿔주는 함수를 setInterval을 씌워서 실행할 수 있게 되죠!</p>

                <p>덤으로 currstate가 1일때는(탭메뉴 중 1단계를 클릭하면 currstate가 1로 바뀝니다.) 자바스크립트의 실행이 중지되도록 하기 위해 clearInterval 함수를 사용했어요.</p>
<pre className="codeView">{`componentDidUpdate(prevProps, prevState){
  if (this.props.currstate !== prevProps.currstate) {
    this.setState({
      currstate : this.props.currstate
    });

    if(this.props.currstate !== 1){
      this.timer = setInterval(
        () => this.swiperImg(), 3000
      );
      
    }else{
      clearInterval(this.timer);
    }
  }
}`}</pre>
            </div>
        </div>
    )
  }
}
  

export default Content2;
