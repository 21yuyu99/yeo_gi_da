import styled from "styled-components";
export const Logo = () => {
  return(
  <LogoContainer>
  <LogoBorder position="top"/>
    <LogoTitle>
      여기다
    </LogoTitle>
    <LogoBorder position="bottom"/>
  </LogoContainer>
  )
}

export const LogoBorder = styled("div")<{position:String}>`
height:40px;
width:40px;
border: solid black;
display:inline-block;
//position : fixed;
border-radius : 5px;
${props => props.position =='top'?`
border-width: 4px 0 0 4px;`:`border-width: 0px 4px 4px 0;`}
`

export const LogoTitle = styled.span`
font-size:2rem;
padding:5px;
`

export const LogoContainer = styled.div`
margin:0 20%;
`