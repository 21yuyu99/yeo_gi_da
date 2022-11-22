export default function PostRegister(title:string,allImage:string,explain:string,tip:string,location:string,category:string){
  fetch('http://127.0.0.1:3030/board/common/create',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name:title,
      picture:allImage,
      intro:explain,
      location:location,
      category
    })
})
  .then(res => res.json())
}