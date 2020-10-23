$(document).ready(function(){
    $('#search_button').click(function(e){
        e.preventDefault()
        $city=$('#search_city').val()
        console.log($city)
        
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://api.weatherapi.com/v1/current.json?key=da7230ef71554a598db104645201910&q='+$city,
            success: function(res){
                console.log('successfully get data from json-server')
                console.log(res)
                $city_box=
                `
                 
                <div class="card m-3" style="width: 50%; height:50%;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${res.current.condition.icon}" width="50%" class="card-img" alt="weather icon">
                    <h6 class="text-center">${res.current.condition.text}</h6>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                    <h3 class="card-title">${res.location.name}</h3>
                    <h4>${res.location.country}</h4>
                    <h1 class="card-text temp_c" >${res.current.temp_c}</h1>                    
                    <h1 class="card-text temp_f" style="display : none;" >${res.current.temp_f}</h1>
                    </div>
                  </div>
                </div>
              </div>
                
                `
                 $('#search_container').empty();
                 $('#search_container').append($city_box);                
                
            }
        })
    })

    
      
      $(".temp_c").click(function() {
        (this).css('display','none');
        ('temp_f').css('display','block')
        
       });

})
