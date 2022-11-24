export default function GetRecommend(region:string,withWho:string,transportation:string,scenery:string,mood:string){
 return fetch('http://127.0.0.1:3030/board/common/search',{
   method:'POST',
   headers:{
     "Content-Type":"application/json",
   },
   body:JSON.stringify({
      region:region,
      withWho:withWho,
      transportation: transportation,
      scenery:scenery,
      mood: mood
         })
})
   .then(res=>res.json())
}
