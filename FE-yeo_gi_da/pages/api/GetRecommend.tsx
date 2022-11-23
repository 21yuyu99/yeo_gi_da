import { useQuery } from "@tanstack/react-query";

const GetRecommend = (region:string,withWho:string,transportation:string,scenery:string,mood:string) => {
  return useQuery<any>([],()=>
  fetch('https://fakestoreapi.com/products',{
    method:'GET',
  }
  )
  .then(res => res.json())
  )
}
export default GetRecommend;