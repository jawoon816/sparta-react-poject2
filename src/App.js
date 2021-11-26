import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import {createDictionary, loadDictionary, loadDictionaryFB} from "./redux/modules/dictionary";

import Dictionary from "./Dictionary";
import Detail from "./Detail";


function App() {
  const [list, setList] = React.useState([
    { word: "word", meaning: "단어, 낱말", example: "Do not write more than 200 words." },
    { word: "hello", meaning: "인사, 여보세요", example: "Hello John, how are you?" },
    { word: "voyage", meaning: "여행, 항해", example: "an around-the-world voyage" }
  ])
  console.log(list[1].word);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadDictionaryFB())
  }, []);

  return (
    <div className="App">
      <Wrap>
        <h3 style={{ textAlign: "center" }}>
          My Dictionary
        </h3>
        <div>
          <Route path="/" exact>
            <Dictionary list={list} />
          </Route>
          <Route path="/detail" exact>
            <Detail list={list} />
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
