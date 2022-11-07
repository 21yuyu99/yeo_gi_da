import styled from "styled-components"
import Image from 'next/image'
export const Footer = () => {
  return(
    <Test>
      <BatteryImg>
        <Image src="/img/battery.svg" alt="" width={60} height={30}/>
      </BatteryImg>
      <FooterText>Copyright 2022,여기다 All rights reserved.</FooterText>
    </Test>
    
  )
}
const BatteryImg = styled.div`
display:inline-block;
position:fixed;
margin-right:30px;
bottom:0;
right:0px;
margin-bottom:15px;
`
const FootHeader = styled.footer`
position: absolute;
height:100vh;
`
const FooterText = styled.div`
font-size:0.8rem;
width:100%;
text-align:center;
margin-bottom:15px;
position:absolute;
bottom:0;
`
const Test = styled.div`
min-height:100%;
`