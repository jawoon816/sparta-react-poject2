import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDictionary, addDictionaryFB, updateDictionary, updateDictionaryFB } from "./redux/modules/dictionary";


const Edit = (props) => {
    const history = useHistory();
    const params = useParams();
    // console.log(params.id)
    const dispatch = useDispatch();
    
    const dic_list = useSelector((state) => state.dictionary.list);

    const my_input = React.useRef(null);
    const my_input2 = React.useRef(null);
    const my_input3 = React.useRef(null);
    

    const [inputs, setInputs] = React.useState({
        // word: "",meaning:"",example:""
    });

    // const {word, meaning, example} = inputs;
    

    const onChange = () => {
        const word = my_input.current.value;
        const meaning = my_input2.current.value;
        const example = my_input3.current.value;

        const wrap = {word, meaning, example};
        console.log(wrap);

        // dispatch(updateDictionaryFB(wrap));
    
    }


    return (
        <Wrap>
            <h5 style={{ color: "#858483" }}>단어 수정하기</h5>
            {dic_list.map((l, i) => {
                // console.log(l,i)
                if (params.id === l.id) {
                    return (
                        <div className="Box" key={i}>
                            <Box >
                                <Word>단어</Word>
                                <Input type="text" ref={my_input} defaultValue={l.word} onChange={onChange}/>
                            </Box>
                            <Box>
                                <Word>설명</Word>
                                <Input type="text"  ref={my_input2} defaultValue={l.meaning} onChange={onChange}/>
                            </Box>
                            <Box>
                                <Word>예시</Word>
                                <Input type="text"  ref={my_input3} defaultValue={l.example} onChange={onChange}/>
                            </Box>
                            <ButtonDiv>
                                <Button2 onClick={() => {
                                    history.push("/")
                                }}>뒤로가기</Button2>
                                <Button onClick={() => {
                                        dispatch(updateDictionaryFB({
                                            id:params.id ,word:my_input.current.value, meaning:my_input2.current.value, example:my_input3.current.value}));
                                        history.push("/")
                                }}>수정하기</Button>
                            </ButtonDiv>
                        </div>
                    );
                }
            })}

        </Wrap>
    );
}


const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border:  #fff0b8 solid;
border-radius: 30px;
width: 350px;
padding: 30px;
margin-top: 50px;
`;

const Box = styled.div`
width: 350px;
height: 70px;
padding: 10px;
margin-top: 8px;
`;

const Word = styled.div`
font-size: x-small;
color: #c9c6b7;
border-bottom: #c9c6b7 solid 1px;
width: 20px;
margin-bottom: 8px;
`;

const Input = styled.input`
padding: 10px;
width: 330px;
border-radius: 5px;
border: #DDD solid 1px;
Input:focus {
    outline: none;
    border: 1px solid #ff1212;
}
`;

const ButtonDiv = styled.div`
/* display: flex;
align-items: center; */
`;

const Button2 = styled.button`
padding: 10px;
background-color: #fff3c4;
margin-top: 20px;
margin-left: 87px;
border-radius: 10px;
border: #ffde59 solid;
cursor: pointer;
margin-right: 20px;
box-shadow: 1px 1px 2px 1px #dadce0;
color: #858483;
`;

const Button = styled.button`
padding: 10px;
margin-left: 20px;
background-color: #fff3c4;
margin-top: 20px;
border-radius: 10px;
border: #ffde59 solid;
cursor: pointer;
box-shadow: 1px 1px 2px 1px #dadce0;
color: #858483;
`;


export default Edit;