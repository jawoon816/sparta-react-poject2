import React from "react";
import styled from "styled-components";

const Detail = (props) => {
    return (
        
            <Wrap>
                <h5>단어 추가하기</h5>
                <Box>
                    <Word>단어</Word>
                    <Input type="text" />
                </Box>
                <Box>
                    <Word>설명</Word>
                    <Input type="text" />
                </Box>
                <Box>
                    <Word>예시</Word>
                    <Input type="text" />
                </Box>
                <Button>추가하기</Button>
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
background-color: orange;
margin-top: 20px;
border-radius: 5px;
border: orange solid;
cursor: pointer;
`;

export default Detail;