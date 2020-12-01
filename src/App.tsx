import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html,body{
      color:#333;
      margin:0;
      padding:0;
      font-family:sans-serif;
      text-align:center;
      height:100%
  }
  #root {
       height: 100%;
  }
  
  .vCenter{
      table-layout:fixed;
      display:table;
      height:90%;
      width:100%;
      overflow:hidden
  }
  .vCell{
      display:table-cell;
      vertical-align:middle;
  }

  a {
    color:#333;
    text-translateX(2px);
    text-decoration:none
  }

  .logo{
    transform:rotate(30deg);
    &:hover {
      animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;
      transform:rotate(30deg) backface-visibility: hidden;
      perspective:1000px
    }
  }

  ul {
      list-style-type:none;
      padding:0
  }

  li {
      display:inline-block;
      
      &:hover {
        text-decoration:underline;
      }
      
      &:after {
        margin: 5px;
        content:'|';
      }

      &:last-child:after {
        content: none;
      }
  }

  @keyframes shake{
      10%,90%{
          transform:translate3d(-1px,0,0) rotate(30deg)
      }
      20%,80%{
          transform:translate3d(2px,0,0) rotate(30deg)
      }
      30%,50%,70%{
          transform:translate3d(-4px,0,0) rotate(30deg)
      }
      40%,60%{
          transform:translate3d(4px,0,0) rotate(30deg)
      }
  }

`;

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/sin.js";
    document.body.appendChild(script);
  });

  return (
    <>
      <div className="vCenter">
        <div className="vCell">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              height="85"
              width="300"
            >
              <path
                d="M0 80 C40 0, 265 0, 295 80 Z"
                fill="transparent"
                stroke="#000000"
                id="bunTop"
              />
            </svg>
            <h1>Byteburgers</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="300"
              id="bottomBuger"
            >
              <path id="sin" stroke="black" fill="transparent" />
              <path
                d="M5 45 L295 45 Q304 60 295 75 L5 75 Q-4 60 5 45"
                stroke="black"
                fill="transparent"
                id="bunBottom"
              />
            </svg>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <a href="mailto:cheese@byteburgers.com">cheese@byteburgers.com</a>
          </li>
          <li>
            <a href="cheese@byteburgers.com.asc">Pub-Key: 8B0E5F0E</a>
          </li>
          <li>
            <a href="https://github.com/mrlaessig">GitHub</a>
          </li>
        </ul>
      </footer>
      <GlobalStyle />
    </>
  );
}

export default App;
