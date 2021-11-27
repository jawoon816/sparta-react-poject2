import React, {useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {deleteDictionaryFB} from "./redux/modules/dictionary"

const Dictionary = (props) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(props.list)
    // const dic_list = props.list;
    const dic_list = useSelector((state)=>state.dictionary.list);
    console.log(dic_list)
    
    return (
        <Wrap>
            <Container>
                {dic_list.map((l, idx) => {
                    console.log(l, idx);
                    return (
                        <Card className="card" key={idx}>
                            <P>
                                <Word>단어</Word>
                                <b style={{ fontSize: "30px" }}>
                                    {l.word}
                                </b>
                            </P>
                            <P>
                                <Word>설명</Word>
                                <Explain>{l.meaning}</Explain>
                            </P>
                            <P>
                                <Word>예시</Word>
                                <Example>{l.example}</Example>
                            </P>
                            <div style={{marginLeft:"200px"}}>
                            <ButtonD onClick={()=>{
                                dispatch(deleteDictionaryFB(l.id));
                                window.location.reload();
                            }}>삭제</ButtonD>
                            <ButtonE onClick={()=>{
                               
                                history.push(`/edit/${l.id}`);
                            }}>수정</ButtonE>
                            </div>
                            
                        </Card>

                    );
                })}

            </Container>

            <Button onClick={() => {
                history.push("/detail")
            }}>+</Button>
        </Wrap>
    );
}

const Wrap = styled.div`
margin-top: 30px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
height: 75vh;
overflow-x: hidden;
overflow-y:auto;
&::-webkit-scrollbar {//스크롤바 전체
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {//스크롤 막대
    background: #ffde59;
    border-radius: 6px;
  }
max-height: 75vh;
`;

const Card = styled.div`
background-color: #fff;
border: #fff0b8 solid;
border-radius: 25px;
width: 300px;
height: 200px;
padding: 25px;
margin: 10px;
`;

const P = styled.div`
margin-bottom: 18px;
`;

const Word = styled.div`
font-size: x-small;
border-bottom: #c9c6b7 solid 1px;
margin-bottom: 4px;
color: #c9c6b7;
width: 20px;
`;

const Explain = styled.div`
font-size: 14px;
color: #88898a;
`;

const Example = styled.div`
color: #0048ff;
`;

const ButtonD = styled.button`
background-color: #fff3c4;
box-shadow: 1px 1px 3px 1px #dadce0;
cursor: pointer;
border: 3px #ffde59 solid;
border-radius: 10px;
margin-right: 4px;
color: #737373;
`;

const ButtonE = styled.button`
background-color: #fff3c4;
box-shadow: 1px 1px 3px 1px #dadce0;
cursor: pointer;
border: 3px #ffde59 solid;
border-radius: 10px;
margin-left: 4px;
color: #737373;
`;

const Button = styled.button`
width: 50px;
height: 50px;
border-radius: 50px;
border: 3px #ffde59 solid;
margin-left: 300px;
background-color: #fff3c4;
box-shadow: 1px 1px 3px 1px #dadce0;
cursor: pointer;
`;

export default Dictionary;