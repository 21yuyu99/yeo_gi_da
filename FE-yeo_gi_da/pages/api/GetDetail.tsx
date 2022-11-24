import { useQuery } from "@tanstack/react-query";

// export default function GetDetail(id:number){
//   return fetch(`http://127.0.0.1:3030/board/common/detail/${id}`)
//   .then(res=>res.json())
// }
export default function GetDetail(id:number){
  return useQuery<any>([id],()=>
  fetch(`http://127.0.0.1:3030/board/common/detail/${id}`)
  .then(res=>res.json())
  )
}