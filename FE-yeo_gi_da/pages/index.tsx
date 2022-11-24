import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import main_back_image from "../assets/images/main_back_image.jpg"
import { Header } from '../components/layout/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  return (
  <>
    <BackWrapper>
      <BackImage/>    
    </BackWrapper>
    <BodyContainer>
      <LetterText><p>너에게</p><p>특별한 여행지</p><p>우리가 찾아줄게</p></LetterText>
      <MenuContainer>
        <MenuName onClick={()=> router.push('/recommend')}>여행지 추천받기</MenuName>
        <MenuLine/>
        <MenuName onClick={()=> router.push('/register')}>여행지 등록</MenuName>
      </MenuContainer>
    </BodyContainer>
  </>
  )
}
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
const LetterText = styled.div`
font-family:"Nanum";
font-size:2.5rem;
`
const BodyContainer = styled.div`
width:100%;
display:flex;
position:absolute;
justify-content:space-evenly;
align-items:center;
top:20%;
`
const MenuContainer = styled.div`
display:flex;
flex-direction:column;
font-size:2rem;
font-weight:600;
text-align:center;
>p{
  margin:0;
}
`


const MenuName = styled.div`

`
const MenuLine = styled.div`
width:200px;
height:2px;
background-color:black;
left:35px;
margin:25px 0;
position:relative;
`