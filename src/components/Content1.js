import React, { Component } from 'react';


class Content1 extends Component{
  render(){
    return(
      <div>
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
    )
  }
}
  

export default Content1;
