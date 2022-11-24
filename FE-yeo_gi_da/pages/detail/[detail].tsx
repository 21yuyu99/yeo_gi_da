import { useRouter } from "next/router";
import GetDetail from "../api/GetDetail";
import styled from 'styled-components'
import Image from 'next/image';
import { MdOutlineModeComment } from "react-icons/md";
import { useEffect, useState } from 'react';
import { GetComment, PostComment } from "../api/Comment";
import { commentType } from "../../types/commentType";
import { boardType } from "../../types/boardType";
export default function DetailPage () {
  // const [data,setData] = useState<boardType>({
  //   id : 0,
  //   travel_name : "",
  //   travel_picture : "",
  //   travel_intro : "",
  //   travel_tip : "",
  //   travel_hash: "",
  //   travel_location : ""
  // });
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState<commentType[]>([]);
  const router = useRouter();
  const contentId = Number(router.query.detail);
  let getComment = GetComment(contentId);
  // getComment.then(data => setAllComment(data.comment));
  const detailData = GetDetail(contentId);
  async function awaitComment() {
    getComment = GetComment(contentId);
    getComment.then(data => setAllComment(data.comment));
  }
  if (detailData.isLoading) return (<>loading...</>);
  if (detailData.isError) return (<>Error</>);
  if (detailData.isFetching)return(<>isFetching...</>);
  const CommentHandler = async () => {
    await PostComment(contentId, comment);
    setTimeout(async () => awaitComment(), 1000);
  }
  return (
    <>
      <AllContainer>
        <Line />
        <Title>{detailData.data.boards.travel_name}</Title>
        <SingleBox>
          <SubTitle>여행지 소개</SubTitle>
          <SubContent>{detailData.data.boards.travel_intro}</SubContent>
        </SingleBox>
        <SingleBox>
          <SubTitle>여행지 주소</SubTitle>
          <SubContent>{detailData.data.boards.travel_location}</SubContent>
        </SingleBox>
        <SingleBox>
          <SubTitle>여행자가 추천하는 꿀팁!</SubTitle>
          <SubContent>{detailData.data.boards.travel_tip}</SubContent>
        </SingleBox>

        <CommentContainer>
          <Line />
          <CommentTitle>댓글 쓰기</CommentTitle>
          <InputWrapper>
            <InputComment type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <CommentButton onClick={() => CommentHandler()}>등록</CommentButton>
          </InputWrapper>
          {allComment.map(
            x => {
              return (
                <>
                  <SingleCommentBox key={x.id}>
                    <MdOutlineModeComment />
                    <CommentContent>{x.content}</CommentContent>
                  </SingleCommentBox>
                  <CommentLine />
                </>
              )
            }
          )}
        </CommentContainer>
      </AllContainer>
    </>
  )
}
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