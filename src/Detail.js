import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {createDictionary} from "./redux/modules/dictionary";


const Detail = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [list, setList] = React.useState(props);

    // console.log(list)
    const my_input = React.useRef(null);
    const my_input2 = React.useRef(null);
    const my_input3 = React.useRef(null);

    // window.setTimeout(() => {
    //     console.log(my_input)
    // }, 1000)

    const addDicList = () => {
        const word = my_input.current.value;
        const meaning = my_input2.current.value;
        const example = my_input3.current.value;
        
        const wrap = {word, meaning, example};
        console.log(wrap);
       
        // setList([{...list, ...wrap}]);

        dispatch(createDictionary(wrap));
    }
    // console.log(list)
    return (
        <Wrap>
            <h5 style={{color:"#858483"}}>단어 추가하기</h5>
            <Box>
                <Word>단어</Word>
                <Input type="text" ref={my_input} />
            </Box>
            <Box>
                <Word>설명</Word>
                <Input type="text" ref={my_input2} />
            </Box>
            <Box>
                <Word>예시</Word>
                <Input type="text" ref={my_input3}/>
            </Box>
            <Button onClick={addDicList}>추가하기</Button>
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
`;

const Button = styled.button`
padding: 10px;
background-color: #fff3c4;
margin-top: 20px;
border-radius: 10px;
border: #ffde59 solid;
cursor: pointer;
box-shadow: 1px 1px 2px 1px #dadce0;
color: #858483;
`;

export default Detail;