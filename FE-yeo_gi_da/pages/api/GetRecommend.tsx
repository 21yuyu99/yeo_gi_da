export default function GetRecommend(region:string,withWho:string,transportation:string,scenery:string,mood:string){
//  return fetch('https://fakestoreapi.com/auth/login',{
//    method:'POST',
//    headers:{
//      "Content-Type":"application/json",
//    },
//    body:JSON.stringify({
//        username: "mor_2314",
//        password:"83r5^_"
//          })
// })
//    .then(res=>res.json())
return fetch('https://fakestoreapi.com/products')
.then(res=>res.json())}
