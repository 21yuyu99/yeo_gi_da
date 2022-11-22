import test from 'node:test';
import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { checkType } from '../types/checkType';

export const AllCategoryConatainer = styled.div`
display:flex;
justify-content:space-evenly;
`
export const CategoryTitle = styled.div`
font-weight:600;
font-size:1.1rem;
`
export const InputSubCategory = styled.input`
`
export const CategoryLabel = styled.label`
`
export const TwoOptionContainer = styled.div`
font-size: 0.9rem;`
export const SingleCategoryContainer = styled.div`
display:flex;
flex-direction:column;
`