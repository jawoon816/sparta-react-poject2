import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Dictionary from "./Dictionary";
import Detail from "./Detail";

function App() {
  const [list,setList] = React.useState([
    {word: "word", meaning:"단어, 낱말", example:"Do not write more than 200 words."},
    {word: "hello", meaning:"인사, 여보세요", example:"Hello John, how are you?"}
     
  ])
 console.log(list[1].word);
  return (
    <div className="App">
      <Wrap>
        <h3 style={{ textAlign: "center" }}>
          My Dictionary
        </h3>
        <div>
          <Route path="/" exact>
            <Dictionary list={list}/>
          </Route>
          <Route path="/detail" exact>
            <Detail />
          </Route>
        </div>
      </Wrap>
    </div>
  );
}


const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fff;
min-height: 70vh;
padding: 16px;
margin: 20px auto;
`;

export default App;