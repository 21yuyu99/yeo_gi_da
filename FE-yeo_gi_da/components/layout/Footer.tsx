import styled from "styled-components"
import Image from 'next/image'
export const Footer = () => {
  return(
    <>
      <BatteryImg>
        <Image src="/img/battery.svg" alt="" width={60} height={30}/>
      </BatteryImg>
      {/* <FooterText>Copyright 2022,여기다 All rights reserved.</FooterText> */}
    </>
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
const FooterText = styled.div`
font-size:0.8rem;
width:100%;
text-align:center;
margin-bottom:15px;
position:fixed;
bottom:0;
`