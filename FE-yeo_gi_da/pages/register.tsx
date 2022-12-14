import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import styled from 'styled-components'
import { AllCategoryConatainer, CategoryLabel, CategoryTitle, InputSubCategory, SingleCategoryContainer } from '../components/Category.style';
import { moodContent, regionContent, rideContent, sceneryContent, whoContent } from '../components/categoryContent';
import { RegisterContainer, RegisterTitle, RegisterLists, SingleList, RegisterSubtitle, InputText, ImgBox, ImageButtonContainer, InputImg, AllImageTitle, SingleImageContainer, Imagename, RemoveImage, AllTagBox, SingleTagBox, TagName, RemoveTag, InputTag, ApplyButton } from '../components/Register.style';
import { checkType } from '../types/checkType';
import PostRegister from './api/PostRegister';
const Register = () => {
  const [title, setTitle] = useState("");
  const [explain, setExplain] = useState("");
  const [allImage, setAllImage] = useState<File[]>([]);
  const [tip, setTip] = useState("");
  const [allHashtag, setAllHashtag] = useState<string[]>([]);
  const [singleTag, setSingleTag] = useState("");
  const [location, setLocation] = useState("");

  function imageHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const newImage = e.target.files[0];
    setAllImage(() => ([...allImage, newImage]));
  }

  const removeImg = (inx: number) => {
    setAllImage(allImage.filter(image => allImage.indexOf(image) != inx))
  }
  const removeTag = (inx: number) => {
    setAllHashtag(allHashtag.filter(tag => allHashtag.indexOf(tag) != inx))
  }
  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setAllHashtag(() => ([...allHashtag, singleTag]));
      setSingleTag("");
    }
  }
  const [withWho, setWho] = useState<checkType[]>(whoContent);

  const [ride, setRide] = useState<checkType[]>(rideContent);

  const [scenery, setScenery] = useState<checkType[]>(sceneryContent);
  const [mood, setMood] = useState<checkType[]>(moodContent);

  const [region, setRegion] = useState<checkType[]>(regionContent);

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
  const handleRegister = () => {
    // const formData = new FormData();
    //  formData.append('name',title),
    // allImage.map(image=>
    //   formData.append('picture',image),
    //   );
    // formData.append('picture',allImage[0]);
    // formData.append('intro',explain);
    // formData.append('tip',tip);
    // formData.append('location',location);
    // let temp = "";
    // for(let i=0;i<region.length;i++){
    //   if(region[i].checked===true){
    //     temp = region[i].text;
    //     break;
    //   }
    // }
    // formData.append('region',temp);

    // for(let i=0;i<withWho.length;i++){
    //   if(withWho[i].checked===true){
    //     temp = withWho[i].text;
    //     break;
    //   }
    // }
    // formData.append('withWho',temp);

    // for(let i=0;i<ride.length;i++){
    //   if(ride[i].checked===true){
    //     temp = ride[i].text;
    //     break;
    //   }
    // }
    // formData.append('transportation',temp);

    // for(let i=0;i<scenery.length;i++){
    //   if(scenery[i].checked===true){
    //     temp = scenery[i].text;
    //     break;
    //   }
    // }
    // formData.append('scenery',temp);

    // for(let i=0;i<mood.length;i++){
    //   if(mood[i].checked===true){
    //     temp = mood[i].text;
    //     break;
    //   }
    // }
    // formData.append('mood',temp);
    const findChecked = (state: checkType[]) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].checked === true) {
          return state[i].text;
        }
      }
      return "";
    }
    //PostRegister(title,allImage[0],explain,tip,location,findChecked(region),findChecked(withWho),findChecked(ride),findChecked(scenery),findChecked(mood));
    // PostRegister(formData);    
    PostRegister(title, allImage[0].name, explain, tip, allHashtag[0],location, findChecked(region), findChecked(withWho), findChecked(ride), findChecked(scenery), findChecked(mood));
    router.push('/')
  }
  const router = useRouter();
  return (
    <>
      <BackWrapper>
        <BackImage />
      </BackWrapper>
      <RegisterContainer>
        <RegisterTitle>????????? ????????????</RegisterTitle>
        <RegisterLists>
          <SingleList>
            <RegisterSubtitle>????????? ??????</RegisterSubtitle>
            <InputText type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </SingleList>
          <SingleList>
            <RegisterSubtitle>????????? ??????</RegisterSubtitle>
            <InputText type="text" value={location} onChange={e => setLocation(e.target.value)} />
          </SingleList>
          <SingleList>
            <RegisterSubtitle>????????? ??????</RegisterSubtitle>
            <ImgBox>
              <ImageButtonContainer>
                <label htmlFor="uploadImg">?????? ????????????</label>
                <InputImg type="file" id="uploadImg" onChange={imageHandler} />
              </ImageButtonContainer>
              <AllImageTitle>
                {allImage.map(image => {
                  return (
                    <SingleImageContainer key={allImage.indexOf(image)}>
                      <Imagename >{image.name}</Imagename>
                      <RemoveImage onClick={() => removeImg(allImage.indexOf(image))}><CiCircleRemove /></RemoveImage>
                    </SingleImageContainer>
                  )
                })}
              </AllImageTitle>
            </ImgBox>
          </SingleList>

          <SingleList>
            <RegisterSubtitle>????????? ??????</RegisterSubtitle>
            <InputText type="text" value={explain} onChange={e => setExplain(e.target.value)} />
          </SingleList>

          <SingleList>
            <RegisterSubtitle>???????????? ??????</RegisterSubtitle>
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
          </SingleList>
        </RegisterLists>
        <SingleList>
          <RegisterSubtitle>?????? ?????? ?????? ?????? ??????</RegisterSubtitle>
          <InputText type="text" value={tip} onChange={e => setTip(e.target.value)} />
        </SingleList>
        <SingleList>
          <RegisterSubtitle>????????????</RegisterSubtitle>
          <AllTagBox>
            {allHashtag.map(tag => {
              return (
                <SingleTagBox key={tag}>
                  <TagName>{tag}</TagName>
                  <RemoveTag onClick={() => removeTag(allHashtag.indexOf(tag))}><CiCircleRemove /></RemoveTag>
                </SingleTagBox>
              )
            })}
            <InputTag type="hashtag" value={singleTag} onKeyUp={e => keyUpHandler(e)} onChange={e => setSingleTag(e.target.value)} placeholder="????????? ???????????????" />
          </AllTagBox>
        </SingleList>
        {/* <ApplyButton onClick={() => handleRegister()}><Link href="/">????????????</Link></ApplyButton> */}
        <ApplyButton onClick={() => handleRegister()}>????????????</ApplyButton>
      </RegisterContainer>
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
export default Register;