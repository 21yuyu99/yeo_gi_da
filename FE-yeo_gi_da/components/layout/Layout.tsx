import Image from 'next/image'
import { Header } from "./Header"
import styled from "styled-components"
import { Footer } from './Footer'
export const Layout = (props:{children:React.ReactNode}) => {
  return(
    <>
    <Header/>
        <Main>
          {props.children}
        </Main>
    <Footer/>
    </>
  )
}

const Main = styled.main`
z-index:2;
`