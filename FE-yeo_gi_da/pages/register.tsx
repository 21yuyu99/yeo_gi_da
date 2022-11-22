import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import styled from 'styled-components'
import { AllCategoryConatainer, CategoryLabel,CategoryTitle, InputSubCategory, SingleCategoryContainer } from '../components/Category.style';
import { RegisterContainer, RegisterTitle, RegisterLists, SingleList, RegisterSubtitle, InputText, ImgBox, ImageButtonContainer, InputImg, AllImageTitle, SingleImageContainer, Imagename, RemoveImage, AllTagBox, SingleTagBox, TagName, RemoveTag, InputTag, ApplyButton } from '../components/Register.style';
import { checkType } from '../types/checkType';
import PostRegister from './api/PostRegister';

const Register = () => {
  const [title,setTitle] = useState("");
  const [explain,setExplain] = useState("");
  const [allImage,setAllImage] = useState<File[]>([]);
  const [tip,setTip] = useState("");
  const [allHashtag,setAllHashtag] = useState<string[]>([]);
  const [singleTag,setSingleTag] = useState("");
  const [location,setLocation] = useState("");
  
  function imageHandler(e:ChangeEvent<HTMLInputElement>){
  if (!e.target.files) return;
    const newImage = e.target.files[0];
    setAllImage(()=>([...allImage,newImage]));
  }

  const removeImg = (inx:number) => {
    setAllImage(allImage.filter(image=>allImage.indexOf(image)!=inx))
  }
  const removeTag = (inx:number) => {
    setAllHashtag(allHashtag.filter(tag=>allHashtag.indexOf(tag)!=inx))
  }
  const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key ==='Enter'){
      setAllHashtag(()=>([...allHashtag,singleTag]));
      setSingleTag("");
    }
  }
  const handleRegister = () => { 
    const formData = new FormData();
    formData.append('name',title),
    allImage.map(image=>
      formData.append('picture',image),
      );
    formData.append('intro',explain);
    formData.append('location',location);
    // let temp = {}
    //  region.map(
    //   x => x.checked==true?
    // );
    //PostRegister(title,allImage,explain,tip,location,category);
  }
  const [withWho,setWho] = useState<checkType[]>([
    {
      text : '가족',
      checked : false,
    },
     {
       text : '친구',
       checked : false,
      },
      {
        text : '연인',
        checked : false,
      },
      {
        text : '혼자',
        checked : false,
      },
      {
        text:'반려동물',
      checked : false,
    }
  ]);
    
  const [ride,setRide] = useState<checkType[]>([
    {
      text : '뚜벅이',
      checked : false,
    },
     {
       text : '차타고',
       checked : false,
      },
]);

const [scenery,setScenery] = useState<checkType[]>([
  {
    text : '바다',
    checked : false,
  },
   {
     text : '산',
     checked : false,
    },
    {
      text : '기타/상관없음',
      checked : false,
    },
]);  
const [mood,setMood] = useState<checkType[]>([
  {
    text : '힐링',
    checked : false,
  },
   {
     text : '액티비티',
     checked : false,
    },
    {
      text : '모던한',
      checked : false,
    },
    {
      text : '컨트리한',
      checked : false,
    },
     {
       text : '사진명소',
       checked : false,
      },
      {
        text : '핫플레이스',
        checked : false,
      },
    ]);
  
  const [region, setRegion] = useState<checkType[]>([
    {
      text: '수도권 근교',
      checked: false
    },
    {
      text: '경기도',
      checked: false
    },
    {
      text: '강원도',
      checked: false
    },
    {
      text: '경상도',
      checked: false
    },
    {
      text: '충청도',
      checked: false
    },
    {
      text: '전라도',
      checked: false
    },
    {
      text: '제주도',
      checked: false
    }
  ]);

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
  return(
    <>
    <BackWrapper>
      <BackImage/>    
    </BackWrapper>
    <RegisterContainer>
        <RegisterTitle>여행지 등록하기</RegisterTitle>
        <RegisterLists>
          <SingleList>
            <RegisterSubtitle>여행지 제목</RegisterSubtitle>
            <InputText type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
          </SingleList>
          <SingleList>
            <RegisterSubtitle>여행지 주소</RegisterSubtitle>
            <InputText type="text" value={location} onChange={e=>setLocation(e.target.value)}/>
          </SingleList>
          <SingleList>
            <RegisterSubtitle>여행지 사진</RegisterSubtitle> 
          <ImgBox>
              <ImageButtonContainer>
              <label htmlFor="uploadImg">사진 추가하기</label>
              <InputImg type="file" id="uploadImg" onChange={imageHandler}/>
              </ImageButtonContainer>
              <AllImageTitle>
                {allImage.map(image=>{
                  return(
                    <SingleImageContainer key={allImage.indexOf(image)}>
                      <Imagename >{image.name}</Imagename>
                      <RemoveImage onClick={()=>removeImg(allImage.indexOf(image))}><CiCircleRemove/></RemoveImage>
                    </SingleImageContainer>
                )})}
              </AllImageTitle>
          </ImgBox>
          </SingleList>

          <SingleList>
            <RegisterSubtitle>여행지 소개</RegisterSubtitle>
            <InputText type="text" value={explain} onChange={e=>setExplain(e.target.value)}/>
          </SingleList>

          <SingleList>
            <RegisterSubtitle>카테고리 선택</RegisterSubtitle>
            <AllCategoryConatainer>
      <SingleCategoryContainer>
        <CategoryTitle>지역</CategoryTitle>
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
        <CategoryTitle>누구랑</CategoryTitle>
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
        <CategoryTitle>이동수단</CategoryTitle>
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
        <CategoryTitle>바다/산</CategoryTitle>
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
        <CategoryTitle>분위기</CategoryTitle>
        {/* <TwoOptionContainer>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            힐링
          </CategoryLabel>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            액티비티
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
        <CategoryTitle>세부사항</CategoryTitle>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          물놀이 가능
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          사람 없는
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          이색 체험
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          일몰/일출 명소
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          낭만 있는
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          트래킹
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          이국적
        </CategoryLabel>
      </SingleCategoryContainer>
    </AllCategoryConatainer>
          </SingleList>
        </RegisterLists>
        <SingleList>
          <RegisterSubtitle>나만 알고 있는 여행 꿀팁</RegisterSubtitle>
          <InputText type="text" value={tip} onChange={e=>setTip(e.target.value)}/>
        </SingleList>
        <SingleList>
          <RegisterSubtitle>해시태그</RegisterSubtitle>
          <AllTagBox>
            {allHashtag.map(tag=>{return(
              <SingleTagBox key={tag}>
                <TagName>{tag}</TagName>
                <RemoveTag onClick={()=>removeTag(allHashtag.indexOf(tag))}><CiCircleRemove/></RemoveTag>
              </SingleTagBox>
            )})}
            <InputTag type="hashtag" value = {singleTag} onKeyUp={e=>keyUpHandler(e)} onChange={e=>setSingleTag(e.target.value)} placeholder="태그를 입력하세요"/>
          </AllTagBox>
        </SingleList>
        <ApplyButton onClick={()=>handleRegister}>등록하기</ApplyButton>
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