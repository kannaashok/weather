function displayresult(){
    var city= document.getElementById("city").value;
    var apikey='739c0707db709f640b84beab344b615c';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid='+apikey+'&units=metric' )
    .then(response => response.json())
    .then(data => {
        var t = data['main']['temp']
        document.getElementById("output").innerHTML = t;
    })
}