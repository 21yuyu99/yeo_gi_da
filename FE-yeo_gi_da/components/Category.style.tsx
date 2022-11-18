import styled from 'styled-components'
export const CategoryStyle = () => {
  return (
    <AllCategoryConatainer>
      <SingleCategoryContainer>
        <CategoryTitle>지역</CategoryTitle>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          수도권 근교
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          경기도
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          강원도
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          경상도
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          충청도
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          전라도
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          제주도
        </CategoryLabel>
      </SingleCategoryContainer>
      <SingleCategoryContainer>
        <CategoryTitle>누구랑</CategoryTitle>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          가족
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          친구
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          연인
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          혼자
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          반려동물
        </CategoryLabel>
      </SingleCategoryContainer>
      <SingleCategoryContainer>
        <CategoryTitle>이동수단</CategoryTitle>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          뚜벅이
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          차타고
        </CategoryLabel>
      </SingleCategoryContainer>
      <SingleCategoryContainer>
        <CategoryTitle>바다/산</CategoryTitle>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          바다
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          산
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          기타/상관없음
        </CategoryLabel>
      </SingleCategoryContainer>

      <SingleCategoryContainer>
        <CategoryTitle>분위기</CategoryTitle>
        <TwoOptionContainer>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            힐링
          </CategoryLabel>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            액티비티
          </CategoryLabel>
        </TwoOptionContainer>
        <TwoOptionContainer>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            모던한
          </CategoryLabel>
          <CategoryLabel>
            <InputSubCategory type="checkbox" />
            컨트리한
          </CategoryLabel>
        </TwoOptionContainer>

        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          사진명소
        </CategoryLabel>
        <CategoryLabel>
          <InputSubCategory type="checkbox" />
          핫플레이스
        </CategoryLabel>
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
  )
}
const AllCategoryConatainer = styled.div`
display:flex;
justify-content:space-evenly;
`
const CategoryTitle = styled.div`
font-weight:600;
font-size:1.1rem;
`
const InputSubCategory = styled.input`
`
const CategoryLabel = styled.label`
`
const TwoOptionContainer = styled.div`
font-size: 0.9rem;`
const SingleCategoryContainer = styled.div`
display:flex;
flex-direction:column;

`