//checking the ready state
$(document).ready(function(){
    //function to get weather for a city and place it in the desired boc or container in html
    function getCityWeather(city,app_block){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://api.weatherapi.com/v1/current.json?key=da7230ef71554a598db104645201910&q='+city,
        success: function(res){

          let temp_c=res.current.temp_c;
          let temp_feel=res.current.feelslike_c;
          let country=res.location.country;
          let city=res.location.name;
          let region=res.location.region;
          let icon=res.current.condition.icon;
          let condition=res.current.condition.text;
          let humidity=res.current.humidity;
          let wspeed=res.current.wind_kph;
          let cloud=res.current.cloud;
            console.log('successfully get data from json-server')
            console.log(res)
            $city_box=
            `


            <div class="container m-auto d-flex justify-content-center">
            <div class="row " style="height: auto;width: 50%; border:0.5px solid skyblue; border-radius: 10px; ">
            <div class="col-12 dynHead text-center">
            <h3>${city}</h3>
            <span class="col-6">
                <span style="font-size: larger;">${region}</span>
            </span>
            <span class="col-6">
                <span style="font-size: larger;">${country}</span>
            </span>
            <div>
            <img src="${icon}" alt="icon"><h6>${condition}</h6>
            </div>
            <div>
                <h1>${temp_c} <sup>o</sup>C</h1>
                 <p>Feels Like : ${temp_feel} <sup>o</sup>C</p>
            </div>
            <hr>
            <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button>
            </div>
            <div class="collapse" id="collapseExample" style="border:0.5px solid skyblue">
            <div class="card card-body" id="extra">

            <table class="table table-borderless ">
            <tbody>
              <tr>
                <th>Humidity</th>
                <td>${humidity}</td>
              </tr>
              <tr>
                <th>Wind Speed</th>
                <td>${wspeed} kmph</td>
              </tr>
              <tr>
                <th>Cloud Count</th>
                <td>${cloud}</td>
              </tr>
            </tbody>
          </table>


            </div>
            </div>
            </div>
            </div>


            `
            
             $(app_block).empty()
             $(app_block).append($city_box)                
        }
    })
}


//Search function to get the weather of searched city
$('#search_button').click(function(e){
    e.preventDefault()
    $city=$('#search_city').val()
    console.log($city)
    getCityWeather($city,'#search_container')
  })


  var lat;
  var long;
  $('#curLoc').click(function(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position){
        lat=position.coords.latitude;
        long=position.coords.longitude;
        $.ajax({
          type: 'GET',
          dataType: 'json',
          url:'http://api.weatherapi.com/v1/current.json?key=da7230ef71554a598db104645201910&q='+lat+','+long,
          success: function(res){

            let temp_c=res.current.temp_c;
            let temp_feel=res.current.feelslike_c;
            let country=res.location.country;
            let city=res.location.name;
            let region=res.location.region;
            let icon=res.current.condition.icon;
            let condition=res.current.condition.text;
            let humidity=res.current.humidity;
            let wspeed=res.current.wind_kph;
            let cloud=res.current.cloud;

            console.log('successfully get data from json-server')
              console.log(res)
              $city_box=
              `


              <div class="container m-auto d-flex justify-content-center">
              <div class="row" style="height: auto; width: 50%; border:0.5px solid skyblue; border-radius: 10px;">
              <div class="col-12 dynHead text-center">
              <h3>${city}</h3>
              <span class="col-6">
                  <span style="font-size: larger;">${region}</span>
              </span>
              <span class="col-6">
                  <span style="font-size: larger;">${country}</span>
              </span>
              <div>
              <img src="${icon}" alt="icon"><h6>${condition}</h6>
              </div>
              <div>
                  <h1>${temp_c} <sup>o</sup>C</h1>
                   <p>Feels Like : ${temp_feel} <sup>o</sup>C</p>
              </div>
              <hr>
              <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Extra Details
                </button>
              </div>
              <div class="collapse" id="collapseExample" style="border:0.5px solid skyblue">
              <div class="card card-body col-12" id="extra">

              <table class="table table-borderless">
              <tbody>
                <tr>
                  <th>Humidity</th>
                  <td>${humidity}</td>
                </tr>
                <tr>
                  <th>Wind Speed</th>
                  <td>${wspeed} kmph</td>
                </tr>
                <tr>
                  <th>Cloud</th>
                  <td>${cloud}</td>
                </tr>
              </tbody>
            </table>

              </div>
              </div>
              </div>
              </div>


              `
              
               $('#search_container').empty()
               $('#search_container').append($city_box)                
            
          }
        })
      })
    }
  })
})