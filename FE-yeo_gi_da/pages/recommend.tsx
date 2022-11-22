import Image from 'next/image';
import styled from 'styled-components'
import { CategoryStyle } from '../components/Category.style';
const Recommend = () => {
  return (
    <>
      <BackWrapper>
        <BackImage />
      </BackWrapper>
      <MainContainer>
        <CategoryStyle />
        <ApplyButton>적용하기</ApplyButton>        
        <BoxContainer>
          <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />          <TextContainer>
              <SpotTitle>대부해양관광본부</SpotTitle>
              <Location>경기도 안산시 단원구 대부북동</Location>
              <Hashtag># 해바라기 핫 스팟</Hashtag>
            </TextContainer>
          </SingleBox>
          <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />
            <TextContainer>
              <SpotTitle>대부해양관광본부</SpotTitle>
              <Location>경기도 안산시 단원구 대부북동</Location>
              <Hashtag># 해바라기 핫 스팟</Hashtag>
            </TextContainer>
          </SingleBox>
          <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />
            <TextContainer>
              <SpotTitle>대부해양관광본부</SpotTitle>
              <Location>경기도 안산시 단원구 대부북동</Location>
              <Hashtag># 해바라기 핫 스팟</Hashtag>
            </TextContainer>
          </SingleBox>
          <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />
            <TextContainer>
              <SpotTitle>대부해양관광본부</SpotTitle>
              <Location>경기도 안산시 단원구 대부북동</Location>
              <Hashtag># 해바라기 핫 스팟</Hashtag>
            </TextContainer>
          </SingleBox>
          <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />
            <TextContainer>
              <SpotTitle>대부해양관광본부</SpotTitle>
              <Location>경기도 안산시 단원구 대부북동</Location>
              <Hashtag># 해바라기 핫 스팟</Hashtag>
            </TextContainer>
          </SingleBox>
        </BoxContainer>

      </MainContainer>
    </>
  )
}
export default Recommend;
const BackImage = styled.div`
white-space : nowrap;
width:100vw;
height:100vh;
background-image : url(/img/sunset.png);
background-repeat : no-repeat;
background-size : 100% 100%;
background-position: center;  
}
`
const BackWrapper = styled.div`
position:fixed;
`
const MainContainer = styled.div`
position:fixed;
width:80%;
background-color:rgba(255, 255, 255, 0.4);
top:20%;
padding:5% 0;
overflow:auto;
height:80%;
margin:0 10%;
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
text-align:center;
`
const SingleBox = styled.li`
background-color: white;
border-radius: .25em;
display:flex;
//width:350px;
width:35%;
margin-bottom:5%;
`

const TextContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
margin:0 5%;
`
const SpotTitle = styled.div`
font-weight:600;
`
const Location = styled.div`
font-size:0.8rem;
`
const Hashtag = styled.div`
font-size:0.8rem;
`
const BoxContainer = styled.ul`
display:flex;
justify-content: space-evenly;
flex-wrap : wrap;
margin:0 5%;
list-style:none;
padding:0;
`