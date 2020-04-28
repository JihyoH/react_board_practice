import React, { Component } from 'react';
//import styled from 'styled-components';
import Content from './Content';
import Subject from './Subject';
import Logo from "../images/icons8-cheese-64.png";
import Search from "../images/icons8-search-50.png";



class TOC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isopend: false,
      currstate: this.props.currstate,
      subject: 'React Practice',
      content: '이 페이지에서는 react를 활용하여 SPA를 구현하는 연습을 하고 있습니다.'
    };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.currstate !== prevProps.currstate) {
          this.setState({
            currstate : this.props.currstate
          });
    }
  }

  handleClick =(e) =>{
    e.preventDefault();
    this.setState({
      currstate: 2
    });
  }

  render(){
    function openMenu(){
      console.log("openMenu");
    }

    return(
      <div>
        <div className="searchwrapper">
          <div className="logobox"><img src={Logo} alt="logo"/></div>
            <div className="searchbox">
              <input type="text" placeholder="검색"/>
              <img src={Search} alt="logo"/>
            </div>
            <div className="loginbox">로그인 / 회원가입</div>
          </div>
          <div className="navWrapper">
              <div className="navUl">
                  <div className="navLi" onClick={openMenu}><span className="navTextWrapper"><span>전체</span></span></div>
                  <div className="navLi" onClick={this.handleClick}><span className="navTextWrapper"><span>탭메뉴1</span></span></div>
                  <div className="navLi" onClick={this.handleClick}><span className="navTextWrapper"><span>탭메뉴2</span></span></div>
                  <div className="navLi" onClick={this.handleClick}><span className="navTextWrapper"><span>탭메뉴3</span></span></div>
                  <div className="navLi" onClick={this.handleClick}><span className="navTextWrapper"><span>탭메뉴4</span></span></div>
              </div>
          </div>
          <div><Subject title={this.state.subject} sub={this.state.content}/></div>
          <div><Content title={this.state.subject} currstate={this.state.currstate}/></div>
      </div>
      )
  }
}


export default TOC;
