import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "YeonSung";
  src: url(/fonts/YeonSung-Regular.ttf);
}
@font-face{
  font-family:"NotoSan";
  src : url(/fonts//NotoSansKR-Medium.otf);
}
@font-face{
  font-family:"GowunBatang";
  src : url(/fonts//GowunBatang-Regular.ttf);
}
@font-face{
  font-family:"Nanum";
  src : url(/fonts//NanumBrushScript-Regular.ttf);
}
*, *::before, *::after {
  box-sizing: border-box;
}
html,body{
  padding:0;
  margin:0;
  font-size:20px;
  font-family:GowunBatang;
  font-weight:500;
  position:relative;
  width:100%;
  height:100%;
}
a{
  text-decoration-line:none;
  color:black;
}
`
export default GlobalStyle;