import React, { Component } from 'react';
import styled from 'styled-components';

const Searchwrapper = styled.div`
    display:inline-block;
    width:100%;
    height:50px;
    white-space:nowrap;

    div{
        display:inline-block; 
        float:left;
        height:100%;
    }
`;
const Logobox = styled.div`
    width:10%;
    text-align:center;

    img{
        width:auto;
        height:100%;
    }
`;
const Searchbox = styled.div`
    width:70%;
    padding:10px;

    input{
        display:inline-block;
        float:left;
        border:none;
        height:100%;
        width:calc(100% - 30px);
    }
    img{
        display:inline-block; 
        float:left;
    }
`;
const Loginbox = styled.div`
    width:20%;
    font-size:14px;

`;
const NavWrapper = styled.nav`
    display:inline-block;
    width:100%;
    text-align:center;
    background:#ffffff;
    box-shadow:5px 5px 5px #00000088;
`;

const NavUl = styled.ul`
    display:inline-block;
`;

const NavLi = styled.li`
    display: inline-block;
    float:left;
    &:hover {
        background: black;
        color: white;
    }
        a {
            padding:10px;
        }
`;

class TOC extends Component{
    render(){
      return(
        <div>
            <Searchwrapper>
                <Logobox><img src="https://img.icons8.com/wired/64/000000/iron-man.png"/></Logobox>
                <Searchbox>
                    <input type="text" placeholder="배우고 싶은 것이 있나요?"/>
                    <img src="https://via.placeholder.com/30.png/000/fff?text=검색" alt="검색버튼"/>
                </Searchbox>
                <Loginbox>로그인/회원가입</Loginbox>

            </Searchwrapper>
            <NavWrapper>
                <NavUl>
                    <NavLi><a href="index.html"><span>탭메뉴1</span></a></NavLi>
                    <NavLi><a href="index.html"><span>탭메뉴2</span></a></NavLi>
                    <NavLi><a href="index.html"><span>탭메뉴3</span></a></NavLi>
                </NavUl>
            </NavWrapper>
        </div>
      )
    }
  }


export default TOC;
