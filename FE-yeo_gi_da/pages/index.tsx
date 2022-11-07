import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import main_back_image from "../assets/images/main_back_image.jpg"
import { Header } from '../components/layout/Header'
export default function Home() {
  return (
  <>
    <BackWrapper>
      <BackImage/>    
    </BackWrapper>
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