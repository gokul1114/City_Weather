const initialBody = `<div class = "container main"><div class = "row"><h5 class = "col-12"><p>Wether status for your city</p></h5><input class = "col-10" type ="text" id = "input">
<input type="submit" class = "col-2" id = "submit" onclick="getWeatherDetails()"></div></div>`;

document.body.innerHTML = initialBody;



async function getWeatherDetails(element) {
    try {
    let cityName =  document.getElementById("input").value;
    document.body.innerHTML = initialBody;

    var containerRow = document.querySelector('.row');
    let wetherData = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=8446f4e553d8bab1cb671332cc5314e5")
    wetherDataJson = await wetherData.json();
    console.log(wetherDataJson)
    

    let div =  document.createElement("div");
    div.setAttribute("class","main");
    div.innerHTML = `<div class="card col-12">
    <div class="card-body">
      <h5 class="card-title">${wetherDataJson.name}</h5>
      <h6 class="card-text">Max temp : ${wetherDataJson.main.temp_max}</h6>
      <h6 class="card-text">Min temp : ${wetherDataJson.main.temp_min}</h6>
      <h6 class="card-text">Pressure : ${wetherDataJson.main.pressure}</h6>
      <h6 class="card-text">humidity : ${wetherDataJson.main.humidity}</h6>
    </div>
    </div>`

    containerRow.appendChild(div);
    }
    catch(Exception){
        alert(Exception);
    }

}