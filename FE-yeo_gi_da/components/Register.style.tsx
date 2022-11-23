import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import styled from 'styled-components'

export const RegisterContainer = styled.form`
margin:0 10%;
width:80%;
text-align:center;
position: absolute;
top:20%;
background-color:rgba(255, 255, 255, 0.4);
height:80%;
overflow: auto;
`

export const RegisterTitle = styled.h2`
font-size:1.8rem;
`
export const RegisterLists = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
justify-content: space-between;
padding:0;
`

export const SingleList = styled.li`
list-style:none;
`

export const RegisterSubtitle = styled.div`
font-size:1.3rem;
margin:15px;
font-weight:600;
`

export const InputText = styled.input`
width:60%;
height:2rem;
border:none;
padding: .5rem .75rem;
border-radius: .25rem;
font-size:0.8rem;
`
export const InputImg = styled.input`
width: 1px;
height: 1px;
`
export const ImageButtonContainer = styled.span`
>label{
  padding: .5em .75em;
  border-radius: .25em;
  background-color:white; 
  font-weight:600;
  display:inline-block;
  margin-right:5rem;
}
`
export const Imagename = styled.div`
margin-bottom:5px;
letter-spacing: 3px;
font-size: 1rem;
`

export const AllImageTitle = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`
export const ImgBox = styled.span`
display:flex;
justify-content:center;
align-items: center;
`

export const RemoveImage = styled.span`
display:block;
margin:auto 10px;
align-items: center;
`
export const SingleImageContainer = styled.div`
  display:flex;
`
export const ApplyButton = styled.div`
width:100px;
height:40px;
line-height:40px;
background-color: rgba(222, 71, 71, 0.9);
margin-bottom:20px;
color:white;
border-radius: .25em;
margin-left:90%;
`
export const AllTagBox = styled.div`
display:flex;
background-color:white;
width:fit-content;
min-width:60%;
margin:0 20%;
min-height:2rem;
border:none;
padding: .5rem .75rem;
border-radius: .25rem;
font-size:0.8rem;
line-height:0.8rem;

`
export const InputTag = styled.input`
width:20%;
`
export const SingleTagBox = styled.div`
display:flex; 
vertical-aling:middle;
background-color:rgba(222, 69, 69, 0.5);
border-radius: .25rem;
margin-right:5px;
`
export const RemoveTag = styled.div`
margin:auto 5px;
>svg{
}
`

export const TagName = styled.div`
margin:auto 0;
`