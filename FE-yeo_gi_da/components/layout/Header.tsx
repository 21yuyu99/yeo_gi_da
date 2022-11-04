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
export const HeaderContainer = styled.header`
display:flex;
width:100%;
position:fixed;
justify-content:space-around;
margin-top:2%;
white-space : nowrap;
`

export const RecordContainer = styled.span`
color:Red;
//display: flex;
`
export const RecordCircle = styled.div`
display:inline-block;
margin-right:15%;
width:25px;
height:25px;
background-color:red;
border-radius:50%;
`
export const RecordText = styled.span`
font-size:1.5rem;
`
export const LoginContainer = styled.span`
font-size:1rem;
`
export const SignIn = styled.span`
margin-right:5%;
`

export const SignUp = styled.span`
`