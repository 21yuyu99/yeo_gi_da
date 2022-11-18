import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import styled from 'styled-components'
import { CategoryStyle } from '../components/Category.style';
const Register = () => {
  const [title,setTitle] = useState("");
  const [explain,setExplain] = useState("");
  const [AllImage,setAllImage] = useState<File[]>([]);

  function imageHandler(e:ChangeEvent<HTMLInputElement>){
  if (!e.target.files) return;
    const newImage = e.target.files[0];
    setAllImage(()=>([...AllImage,newImage]));
  }

  const removeImg = (inx:number) => {
    setAllImage(AllImage.filter(image=>AllImage.indexOf(image)!=inx))
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
                {AllImage.map(image=>{
                  return(
                    <SingleImageContainer key={AllImage.indexOf(image)}>
                      <Imagename >{image.name}</Imagename>
                      <RemoveImage onClick={()=>removeImg(AllImage.indexOf(image))}><CiCircleRemove/></RemoveImage>
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
`

const RegisterSubtitle = styled.div`
font-size:1.3rem;
margin:15px;
font-weight:600;
`

const InputText = styled.input`
width:60%;
height:1.2rem;
border:none;
padding: .5em .75em;
border-radius: .25em;
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