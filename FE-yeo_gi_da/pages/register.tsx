import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import styled from 'styled-components'
import { CategoryStyle } from '../components/Category.style';
const Register = () => {
  const [title,setTitle] = useState("");
  const [explain,setExplain] = useState("");
  const [allImage,setAllImage] = useState<File[]>([]);
  const [tip,setTip] = useState("");
  const [allHashtag,setAllHashtag] = useState<string[]>([]);
  const [singleTag,setSingleTag] = useState("");

  function imageHandler(e:ChangeEvent<HTMLInputElement>){
  if (!e.target.files) return;
    const newImage = e.target.files[0];
    setAllImage(()=>([...allImage,newImage]));
  }

  const removeImg = (inx:number) => {
    setAllImage(allImage.filter(image=>allImage.indexOf(image)!=inx))
  }
  const removeTag = (inx:number) => {
    setAllHashtag(allHashtag.filter(tag=>allHashtag.indexOf(tag)!=inx))
  }
  const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key ==='Enter'){
      setAllHashtag(()=>([...allHashtag,singleTag]));
      setSingleTag("");
    }
  }

  return(
    <>
      <BackWrapper>
      <BackImage/>    
      </BackWrapper>

      <RegisterContainer>
        <RegisterTitle>여행지 등록하기</RegisterTitle>
        <RegisterLists>
          <SingleList>
            <RegisterSubtitle>여행지 제목</RegisterSubtitle>
            <InputText type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
          </SingleList>
          <SingleList>
            <RegisterSubtitle>여행지 사진</RegisterSubtitle> 
          <ImgBox>
              <ImageButtonContainer>
              <label htmlFor="uploadImg">사진 추가하기</label>
              <InputImg type="file" id="uploadImg" onChange={imageHandler}/>
              </ImageButtonContainer>
              <AllImageTitle>
                {allImage.map(image=>{
                  return(
                    <SingleImageContainer key={allImage.indexOf(image)}>
                      <Imagename >{image.name}</Imagename>
                      <RemoveImage onClick={()=>removeImg(allImage.indexOf(image))}><CiCircleRemove/></RemoveImage>
                    </SingleImageContainer>
                )})}
              </AllImageTitle>
          </ImgBox>
          </SingleList>

          <SingleList>
            <RegisterSubtitle>여행지 소개</RegisterSubtitle>
            <InputText type="text" value={explain} onChange={e=>setExplain(e.target.value)}/>
          </SingleList>

          <SingleList>
            <RegisterSubtitle>카테고리 선택</RegisterSubtitle>
            <CategoryStyle/>
          </SingleList>
        </RegisterLists>
        <SingleList>
          <RegisterSubtitle>나만 알고 있는 여행 꿀팁</RegisterSubtitle>
          <InputText type="text" value={tip} onChange={e=>setTip(e.target.value)}/>
        </SingleList>
        <SingleList>
          <RegisterSubtitle>해시태그</RegisterSubtitle>
          <AllTagBox>
            {allHashtag.map(tag=>{return(
              <SingleTagBox key={tag}>
                <TagName>{tag}</TagName>
                <RemoveTag onClick={()=>removeTag(allHashtag.indexOf(tag))}><CiCircleRemove/></RemoveTag>
              </SingleTagBox>
            )
          }
              )}
            <InputTag type="hashtag" value = {singleTag} onKeyUp={e=>keyUpHandler(e)} onChange={e=>setSingleTag(e.target.value)} placeholder="태그를 입력하세요"/>
          </AllTagBox>
        </SingleList>
        <ApplyButton>등록하기</ApplyButton>
      </RegisterContainer>
    </>
  )
}
export default Register;

const BackImage = styled.div`
white-space : nowrap;
width:100vw;
height:100vh;
background-image : url(/img/main_back_image.png);
background-repeat : no-repeat;
background-size : 100% 100%;
background-position: center;  
}
`
const BackWrapper = styled.div`
position:fixed;
`
const RegisterContainer = styled.form`
margin:0 10%;
width:80%;
text-align:center;
position: absolute;
top:20%;
background-color:rgba(255, 255, 255, 0.4);
height:80%;
overflow: auto;
`

const RegisterTitle = styled.h2`
font-size:1.8rem;
`
const RegisterLists = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
justify-content: space-between;
padding:0;
`

const SingleList = styled.li`
list-style:none;
`

const RegisterSubtitle = styled.div`
font-size:1.3rem;
margin:15px;
font-weight:600;
`

const InputText = styled.input`
width:60%;
height:2rem;
border:none;
padding: .5rem .75rem;
border-radius: .25rem;
font-size:0.8rem;
`
const InputImg = styled.input`
width: 1px;
height: 1px;
`
const ImageButtonContainer = styled.span`
>label{
  padding: .5em .75em;
  border-radius: .25em;
  background-color:white; 
  font-weight:600;
  display:inline-block;
  margin-right:5rem;
}
`
const Imagename = styled.div`
margin-bottom:5px;
letter-spacing: 3px;
font-size: 1rem;
`

const AllImageTitle = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`
const ImgBox = styled.span`
display:flex;
justify-content:center;
align-items: center;
`

const RemoveImage = styled.span`
display:block;
margin:auto 10px;
align-items: center;
`
const SingleImageContainer = styled.div`
  display:flex;
`
const ApplyButton = styled.div`
width:100px;
height:40px;
line-height:40px;
background-color: rgba(222, 71, 71, 0.9);
margin-bottom:20px;
color:white;
border-radius: .25em;
margin-left:90%;
`
const AllTagBox = styled.div`
display:flex;
background-color:white;
width:fit-content;
min-width:60%;
margin:0 20%;
min-height:2rem;
border:none;
padding: .5rem .75rem;
border-radius: .25rem;
font-size:0.8rem;
line-height:0.8rem;

`
const InputTag = styled.input`
width:20%;
`
const SingleTagBox = styled.div`
display:flex; 
vertical-aling:middle;
background-color:rgba(222, 69, 69, 0.5);
border-radius: .25rem;
margin-right:5px;
`
const RemoveTag = styled.div`
margin:auto 5px;
>svg{
}
`

const TagName = styled.div`
margin:auto 0;
`