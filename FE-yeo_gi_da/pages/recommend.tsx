import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from "@tanstack/react-query";

import styled from 'styled-components'
import { AllCategoryConatainer, CategoryLabel, CategoryTitle, InputSubCategory, SingleCategoryContainer } from '../components/Category.style';
import { moodContent, regionContent, rideContent, sceneryContent, whoContent } from '../components/categoryContent';
import { checkType } from '../types/checkType';
import GetRecommend from './api/GetRecommend';
import { boardType } from '../types/boardType';
import { Router, useRouter } from 'next/router';
const Recommend = () => {
  const router = useRouter();
  const [withWho, setWho] = useState<checkType[]>(whoContent);

  const [ride, setRide] = useState<checkType[]>(rideContent);

  const [scenery, setScenery] = useState<checkType[]>(sceneryContent);
  const [mood, setMood] = useState<checkType[]>(moodContent);

  const [region, setRegion] = useState<checkType[]>(regionContent);
  const [contentBox, setBox] = useState<boardType>({
    id: 0,
    travel_name: "",
    travel_picture: "",
    travel_intro: "",
    travel_tip: "",
    travel_hash: "",
    travel_location: ""
  }
  );
  const [existContent,setExist] = useState(true);
  const onCheckHandler = (state: {
    text: string;
    checked: boolean;
  }[],
    setState: Dispatch<SetStateAction<{
      text: string;
      checked: boolean;
    }[]>>,
    inx: number
  ) => {
    let temp = state;
    temp[inx].checked = !temp[inx].checked;
    setState(
      state.map(
        x =>
          state.indexOf(x) === inx ? { ...x, checked: !x.checked } : x
      )
    )
  }
  const handleRecommend = () => {
    const findChecked = (state: checkType[]) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].checked === true) {
          return state[i].text;
        }
      }
      return "";
    }
    const getrecommend = GetRecommend(findChecked(region), findChecked(withWho), findChecked(ride), findChecked(scenery), findChecked(mood));
    // getrecommend.then(data => setBox(data.boards));
    getrecommend.then(data => data.status===200?setBox(data.boards):"");
  }
  return (
    <>
      <BackWrapper>
        <BackImage />
      </BackWrapper>
      <MainContainer>
        <AllCategoryConatainer>
          <SingleCategoryContainer>
            <CategoryTitle>??????</CategoryTitle>
            {region.map(
              x => {
                const inx = region.indexOf(x);
                return (
                  <CategoryLabel key={x.text}>
                    <InputSubCategory type="checkbox" checked={region[inx].checked} onChange={() => onCheckHandler(region, setRegion, inx)} onClick={() => onCheckHandler(region, setRegion, inx)} />
                    {x.text}
                  </CategoryLabel>
                )
              }
            )}
          </SingleCategoryContainer>

          <SingleCategoryContainer>
            <CategoryTitle>?????????</CategoryTitle>
            {withWho.map(
              x => {
                const inx = withWho.indexOf(x);
                return (
                  <CategoryLabel key={x.text}>
                    <InputSubCategory type="checkbox" checked={withWho[inx].checked} onChange={() => onCheckHandler(withWho, setWho, inx)} onClick={() => onCheckHandler(withWho, setWho, inx)} />
                    {x.text}
                  </CategoryLabel>
                )
              }
            )}
          </SingleCategoryContainer>
          <SingleCategoryContainer>
            <CategoryTitle>????????????</CategoryTitle>
            {ride.map(
              x => {
                const inx = ride.indexOf(x);
                return (
                  <CategoryLabel key={x.text}>
                    <InputSubCategory type="checkbox" checked={ride[inx].checked} onChange={() => onCheckHandler(ride, setRide, inx)} onClick={() => onCheckHandler(ride, setRide, inx)} />
                    {x.text}
                  </CategoryLabel>
                )
              })}
          </SingleCategoryContainer>
          <SingleCategoryContainer>
            <CategoryTitle>??????/???</CategoryTitle>
            {scenery.map(
              x => {
                const inx = scenery.indexOf(x);
                return (
                  <CategoryLabel key={x.text}>
                    <InputSubCategory type="checkbox" checked={scenery[inx].checked} onChange={() => onCheckHandler(scenery, setScenery, inx)} onClick={() => onCheckHandler(scenery, setScenery, inx)} />
                    {x.text}
                  </CategoryLabel>
                )
              })}
          </SingleCategoryContainer>

          <SingleCategoryContainer>
            <CategoryTitle>?????????</CategoryTitle>
            {/* <TwoOptionContainer>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            ??????
          </CategoryLabel>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            ????????????
          </CategoryLabel>
        </TwoOptionContainer> */}
            {mood.map(
              x => {
                const inx = mood.indexOf(x);
                return (
                  <CategoryLabel key={x.text}>
                    <InputSubCategory type="checkbox" checked={mood[inx].checked} onChange={() => onCheckHandler(mood, setMood, inx)} onClick={() => onCheckHandler(mood, setMood, inx)} />
                    {x.text}
                  </CategoryLabel>
                )
              })}
          </SingleCategoryContainer>

          <SingleCategoryContainer>
            <CategoryTitle>????????????</CategoryTitle>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ????????? ??????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ?????? ??????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ?????? ??????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ??????/?????? ??????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ?????? ??????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ?????????
            </CategoryLabel>
            <CategoryLabel>
              <InputSubCategory type="checkbox" />
              ?????????
            </CategoryLabel>
          </SingleCategoryContainer>
        </AllCategoryConatainer>
        <ApplyButton onClick={() => handleRecommend()}>????????????</ApplyButton>
        <BoxContainer>
          {/* <SingleBox>
            <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} />          <TextContainer>
              <SpotTitle>????????????????????????</SpotTitle>
              <Location>????????? ????????? ????????? ????????????</Location>
              <Hashtag># ???????????? ??? ??????</Hashtag>
            </TextContainer>
          </SingleBox> */}
          {contentBox.travel_name===""?<>????????? ????????? ????????????</>:
          <SingleBox onClick={() => router.push(`/detail/${contentBox.id}`)}>
            <TextContainer>
              <SpotTitle>{contentBox.travel_name}</SpotTitle>
              <Location>{contentBox.travel_location}</Location>
              <Hashtag>{contentBox.travel_hash}</Hashtag>
            </TextContainer>
          </SingleBox>
          }
        </BoxContainer>

      </MainContainer>
    </>
  )
}
// {contentBox.map(
//   x => {
//     return (
//       <SingleBox key={x.id} onClick={() => router.push(`/detail/${x.id}`)}>
//         {/* <Image alt="sunflower.jpg" src="/img/sunflower.jpg" width={200} height={180} /> */}
//         <TextContainer>
//           <SpotTitle>{x.travel_name}</SpotTitle>
//           <Location>{x.travel_location}</Location>
//           <Hashtag>{x.travel_hash}</Hashtag>
//         </TextContainer>
//       </SingleBox>
//     )
//   }
// )}
export default Recommend;
const BackImage = styled.div`
white-space : nowrap;
width:100vw;
height:100vh;
background-image : url(/img/sunset.png);
background-repeat : no-repeat;
background-size : 100% 100%;
background-position: center;  
}
`
const BackWrapper = styled.div`
position:fixed;
`
const MainContainer = styled.div`
position:fixed;
width:80%;
background-color:rgba(255, 255, 255, 0.4);
top:20%;
padding:5% 0;
overflow:auto;
height:80%;
margin:0 10%;
`
const ApplyButton = styled.div`
width:100px;
height:40px;
line-height:40px;
background-color: rgba(222, 71, 71, 0.9);
margin-bottom:20px;
color:white;
border-radius: .25em;
margin-left:90%;
text-align:center;
`
const SingleBox = styled.li`
background-color: white;
border-radius: .25em;
display:flex;
width:11rem;
margin-bottom:5%;
`

const TextContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
margin:0 5%;
`
const SpotTitle = styled.div`
font-weight:600;
`
const Location = styled.div`
font-size:0.8rem;
`
const Hashtag = styled.div`
font-size:0.8rem;
`
const BoxContainer = styled.ul`
display:flex;
justify-content: space-evenly;
flex-wrap : wrap;
margin:0 5%;
list-style:none;
padding:0;
`