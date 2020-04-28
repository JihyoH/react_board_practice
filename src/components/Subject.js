import React, { Component } from 'react';
import Book1 from '../images/stock-book1.jpg';
import Book2 from '../images/stock-book2.jpg';
import Book3 from '../images/stock-book3.jpg';


class Subject extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      sub: this.props.sub,
      timer: ""
    };

  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.swiperImg(), 3000
    );
  }

  swiperImg(){
    const imgList = document.getElementsByClassName("mainBannerImgBox")[0].getElementsByTagName("img");
    let onboardIdx = 0;

    for(let i=0; i<imgList.length; i++){
      if(imgList[i].classList.contains("onBoard")){
          onboardIdx = i+1;
          imgList[i].classList.remove("onBoard");
      }
    }

    if( onboardIdx < imgList.length ){
      imgList[onboardIdx].classList.add("onBoard");
    }else{
      imgList[0].classList.add("onBoard");
    }
  }

  render(){
    return(
      <div className="mainBannerWrapper">
        <div className="mainBannerTextBox">
          <h1>{this.state.title}</h1>
          <p>{this.state.sub}</p>
        </div>
        <div className="mainBannerImgBox">
          <img className="mainBannerImg onBoard" src={Book1} alt={this.props.title}/>
          <img className="mainBannerImg" src={Book2} alt={this.props.title}/>
          <img className="mainBannerImg" src={Book3} alt={this.props.title}/>
        </div>
      </div>
    )
  }
}
  
  

export default Subject;
