// let url=`http://api.openweathermap.org/data/2.5/forecast?lat=31.6340&lon=74.8723&appid=1b70dbaa954f66162739da95d6e5f22d`;
let url=`https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=1b70dbaa954f66162739da95d6e5f22d`;
fetch(url)
.then(response=>{response.json();})
.then(data=>{
    let dt=new Date(1673833184000);
    let dt1=new Date(1673873285000);
    console.log(dt);
    console.log(dt1);
    console.log(data);
})