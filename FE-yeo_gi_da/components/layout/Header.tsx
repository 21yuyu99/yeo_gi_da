import styled from "styled-components";
import { Logo } from "./Logo";
export const Header = () => {
  return (
    <HeaderContainer> 
      <RecordContainer>
        <RecordCircle/>
        <RecordText>REC</RecordText>
      </RecordContainer>
      <LoginContainer>
        <SignIn>로그인</SignIn>
        <SignUp>회원가입</SignUp>
      </LoginContainer>
      <Logo/>
    </HeaderContainer>
  )
}

export const RecordContainer = styled.span`
margin-left:5%;
float:left;
color:Red;
`
export const RecordCircle = styled.div`
display:inline-block;
margin-right:10px;
width:18px;
height:18px;
background-color:red;
border-radius:50%;
`
export const RecordText = styled.span`
font-family:"NotoSan";
font-size:1.3em;
font-weight:500;
`
export const LoginContainer = styled.span`
margin-right:5%;
float:right;
font-size:0.9rem;
font-weight:600;
`
export const SignIn = styled.span`
margin-right:15px;
`

export const SignUp = styled.span`
`
export const HeaderContainer = styled.header`
display:inline;
width:100%;
position:fixed;
padding-top:2%;
white-space : nowrap;
z-index:2;
padding-bottom:2%;
`