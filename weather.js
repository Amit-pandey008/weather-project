// this is js code of weather page
let cityNmae=document.getElementById('cityName');
let cityDetails=document.getElementById('city');
let temperature=document.getElementById('temp1');
let calender=document.getElementById('calender')




let fetchDetails= async() => {
   if(cityNmae.value.length==0){
   alert("please enter a city name before") 
}
else{
   //api fetch
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
   let response =await fetch(url)
   let data=await response.json()
   cityDetails.innerText=`${data.name},${data.sys.country}`
   calender.innerText=`${new Date().toLocaleString()}`;
   temperature.innerHTML=`<h1>${data.main.temp
   } <sup>0</sup>C`


date_time.innerText=`${x.toDateString()}`

   if(data.main.temp>30){
      tempImage.src="https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png"
   }
   else if(data.main.temp>=20 && data.main.temp<30){
            tempImage.src="https://cdn.icon-icons.com/icons2/1461/PNG/512/2998141-cloud-nature-rain-weather_99845.png"
   }else if(data.main.temp<20 && data.main.temp>5){
       tempImage.src="https://cdn.icon-icons.com/icons2/1719/PNG/512/3856405-christmas-cold-ice-snowflake-winter_112766.png"
   }else if(data.main.temp<0){
      tempImage.src="https://cdn.icon-icons.com/icons2/1338/PNG/512/zerodegrees_87422.png"
   }
   }
} 

