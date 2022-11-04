import Image from 'next/image'
import { Header } from "./Header"
import main_back_image from '../../assets/images/main_back_image.jpg'
import styled from "styled-components"
export const Layout = (props:{children:React.ReactNode}) => {
  return(
    <HI>
    <Text>
    <BackImage>
      <Header/>
    </BackImage>
    </Text>
      <Main>
        {props.children}
      </Main>
    </HI>
  )
}
const BackImage = styled.div`
white-space : nowrap;
width:100vw;
height:100vh;
background-image : url(/img/main_back_image.jpg);
background-repeat : no-repeat;
background-size : 100% 100%;
background-position: center;  
}
`
const Text = styled.div`
position:fixed;
`
const HI = styled.div`
position:relative;
`
const Main = styled.main`
position:absolute;
`