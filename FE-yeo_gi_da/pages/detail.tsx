import styled from 'styled-components'
import Image from 'next/image';
import { MdOutlineModeComment } from "react-icons/md";
import {useState} from 'react';
const Detail = () => {
  const [comment,setComment] = useState("");
  return (
    <>

      <AllContainer>
        <Line />
        <Title>대부해양관광본부</Title>
        <Image alt="" src="" />
        <SingleBox>
          <SubTitle>여행지 소개</SubTitle>
          <SubContent>해바라기가 펼쳐져있어요 이야아아아아아아</SubContent>
        </SingleBox>
        <SingleBox>
          <SubTitle>여행자가 추천하는 꿀팁!</SubTitle>
          <SubContent>밝은 옷 필수</SubContent>
        </SingleBox>

        <CommentContainer>
          <Line />
          <CommentTitle>댓글 쓰기</CommentTitle>
          <InputWrapper>
            <InputComment type="text" value={comment} onChange={e=>setComment(e.target.value)}/>
            <CommentButton>등록</CommentButton>
          </InputWrapper>
          <SingleCommentBox>
            <MdOutlineModeComment/>
            <CommentContent>이뻐요</CommentContent>
          </SingleCommentBox>
          <CommentLine />
          <SingleCommentBox>
            <MdOutlineModeComment/>
            <CommentContent>여기 짱이네요</CommentContent>
          </SingleCommentBox>
        </CommentContainer>
      </AllContainer>
    </>
  )
}
export default Detail;
const AllContainer = styled.div`
position:fixed;
top:16%;
overflow:auto;
height:80%;
margin:0 10%;
width:80%;
`
const Title = styled.h2`
text-align:center;
font-size:1.8rem;
letter-spacing:0.5rem;
`
const SubContent = styled.p`
`
const SubTitle = styled.div`
font-size:1.3rem;
font-weight:600;
color:rgba(63, 115, 213, 0.93);
`
const Line = styled.hr`
margin:0;
padding:0;
box-shadow: 0 10px 10px -10px #8c8c8c inset;
border-color:rgba(0, 0, 0, 0.2);
`
const CommentContainer = styled.div`
margin-top:2%;

`
const CommentTitle = styled.div`
margin-top:2%;
margin-left:5%;
font-size:1.2rem;
font-weight:600;
`
const SingleBox = styled.div`
margin-left:5%;
`

const InputComment = styled.input`
border-width:1px;
width:30%;
height:2rem;
border-radius: .2em;
`
const CommentButton = styled.div`
display:inline-block;
background-color:rgba(72, 132, 244, 0.96);
color:white;
height:2rem;
width:3rem;
text-align:center;
border-radius: .2em;
line-height:2rem;
`
const InputWrapper = styled.div`
margin-left:5%;
margin-top:2%;
margin-bottom:5%;
display:flex;
`
const CommentContent = styled.div`
margin-left:5%;
margin:10px 0 5px 15px;
display:inline-block;
`
const CommentLine = styled.hr`
width:90%;
border-color:rgba(63, 115, 213, 0.2);
`
const SingleCommentBox = styled.div`
margin-left:8%;
>svg{
  color:rgba(63, 115, 213, 0.93);
}
`