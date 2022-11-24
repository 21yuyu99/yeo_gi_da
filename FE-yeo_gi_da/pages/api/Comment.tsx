import { useQuery } from "@tanstack/react-query";
import { METHODS } from "http";
import { commentType } from "../../types/commentType";

export async function PostComment(id:number,content:string){
  fetch('http://127.0.0.1:3030/board/common/comment/create',{
    method: 'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      board_id:id,
      content:content
    })
  })
  .then(res=>res.json())
}

// export function GetComment(id:number){
//   return useQuery<any>([id],()=>
//   fetch(`http://127.0.0.1:3030/board/common/comment/${id}`)
//   .then(res=>res.json()),
//   // {refetchOnMount:false,refetchOnWindowFocus:false} 
//   )
// }
export async function GetComment(id:number){
  return fetch(`http://127.0.0.1:3030/board/common/comment/${id}`)
  .then(res=>res.json())
}