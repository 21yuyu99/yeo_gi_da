// title:string,picture:File,explain:string,tip:string,location:string,region:string,
//   withWho:string,transportation:string,scenery:string,mood:string
export default function PostRegister(){
  fetch('http://127.0.0.1:3030/board/common/create',{
    method:'POST',
    cache:'no-cache',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      // name:title,
      // picture:picture,
      // intro:explain,
      // location:location,
      // region:region,
      // withWho:withWho,
      // transportation:transportation,
      // scenery:scenery,
      // mood : mood
      "name" : "영주",
      "picture" : "https://yeongju.go.kr/open_content/main/index.do",
      "intro" : "선비의 고장 영주",
      "tip" : "소고기가 맛있다",
      "location" : "경상북도 영주시",
      "region" : "비수도권",
      "withWho" : "가족",
      "transportation" : "차타고",
      "scenery" : "산",
      "mood" : "힐링"
    })
// body: formData,
})
  .then(res => res.json())
  .then((data)=>{
    console.log(data);
  })
}