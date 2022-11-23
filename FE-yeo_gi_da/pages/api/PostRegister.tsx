export default function PostRegister(title:string,picture:string,explain:string,tip:string,location:string,region:string,
withWho:string,transportation:string,scenery:string,mood:string){
  fetch('http://127.0.0.1:3030/board/common/create',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },

    body:JSON.stringify({
      name : title,
      picture : picture,
      intro : explain,
      tip : tip,
      location : location,
      region : region,
      withWho : withWho,
      transportation: transportation,
      scenery : scenery,
      mood : mood  
    })
    
  })
  .then(res => res.json())
  .then((data)=>{
    console.log(data);
    if(data.status===200){
      alert("여행지 등록이 완료되었습니다.");
    }
    else{
      alert("여행지 등록에 실패했습니다.");
    }
  })
}