import styled from "styled-components";
import Image from 'next/image'
export const Logo = () => {
  return(
  <LogoContainer>
  <LogoBorder position="top"/>
  {/* <Image src="/img/topLeft.png" alt="" width={50} height={40}/> */}
    <LogoTitle>
      여기다
    </LogoTitle>
    <LogoBorder position="bottom"/>
  </LogoContainer>
  )
}

export const LogoBorder = styled("div")<{position:String}>`
height:25px;
width:25px;
border: solid black;
display:inline-block;
position : relative;
border-radius : 5px 0;
${props => props.position =='top'?`
border-width: 2.5px 0 0 2.5px; bottom:10px; left:0px; box-shadow: -2px -2px 3px -1.5px grey;`:`border-width: 0px 2.5px 2.5px 0; top:20px;right:15px; box-shadow: 2px 2px 3px -1.5px grey;`}
`

export const LogoTitle = styled.span`
font-family:"YeonSung";
font-size:2rem;
padding:5px;
font-weight:500;
// text-shadow: 0.5px 1px 5px gray;
letter-spacing: 10px;
`

export const LogoContainer = styled.div`
margin:0 25%;
line-height:1;
`