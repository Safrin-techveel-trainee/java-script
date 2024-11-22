const city = document.getElementById('input')
const button = document.getElementById('btn')
const Name = document.getElementById('name')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const day = document.getElementById('day')
const date = document.getElementById('date')
const temp1 = document.getElementById('temp1')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const mist = document.getElementById('mist')
async function checkweather(city) {
    try {
        const res = await fetch('http://api.weatherapi.com/v1/current.json?key=51a5667144a947a2a9f84051241511&q=' + city);
        let data = await res.json();
        Name.innerHTML = data.location.name;
        temp.innerHTML = data.current.temp_c;
        humidity.innerHTML = data.current.humidity;
        wind.innerHTML = data.current.wind_kph;
        img1.src = data.current.condition.icon;
        //box1
        date.innerHTML = data.current.last_updated;
        let daystr;
        switch (data.current.is_day + 1) {
            case 1:
                daystr = "MONDAY";
                break;
            case 2:
                daystr = "TUESDAY";
                break;
            case 3:
                daystr = "WEDNESDAY";
                break;
            case 4:
                daystr = "THURSDAY";
                break;
            case 5:
                daystr = "FRIDAY";
                break;
            case 6:
                daystr = "SATURDAY";
                break;
            case 7:
                daystr = "SUNDAY";
                break;
        }
        day.innerHTML = daystr
        temp1.innerHTML = data.current.temp_c;
        img2.src = data.current.condition.icon;
        mist.innerHTML = data.current.condition.text;
    }
    catch (err) {
        console.log("Error is found");
    }
    button.addEventListener('click', () => {
        
        checkweather(city.value)

    })
}
checkweather("chennai")

