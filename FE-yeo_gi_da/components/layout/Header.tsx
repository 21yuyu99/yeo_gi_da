import styled from "styled-components";
import { Logo } from "./Logo";
export const Header = () => {
  return (
    <HeaderContainer> 
      <RecordContainer>
        <RecordCircle/>
        <RecordText>REC</RecordText>
      </RecordContainer>
      <Logo/>
      <LoginContainer>
        <SignIn>로그인</SignIn>
        <SignUp>회원가입</SignUp>
      </LoginContainer>
    </HeaderContainer>
  )
}

export const RecordContainer = styled.span`
color:Red;
`
export const RecordCircle = styled.div`
display:inline-block;
margin-right:15%;
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
font-size:0.9rem;
font-weight:600;
`
export const SignIn = styled.span`
margin-right:15%;
`

export const SignUp = styled.span`
`
export const HeaderContainer = styled.header`
display:flex;
width:100%;
position:fixed;
justify-content:space-around;
padding-top:2%;
white-space : nowrap;
z-index:2;
padding-bottom:2%;
`