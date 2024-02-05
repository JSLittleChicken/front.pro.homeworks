const search = document.querySelector('.container .search-box button');

search.addEventListener('click', () => {
    const apiKey = 'c7e86c1c87591dc14f189a0c06d97fc6';
    const city = document.querySelector('.search-box input').value;
    if (city == '') {
        alert('Введіть місто');
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(function (resp) {
            if (resp.ok)
                resp.json()
                    .then(json => {
                        const temperature = document.querySelector('.temperature');
                        const description = document.querySelector('.info-weather .description');
                        const humidity = document.querySelector('.details .humidity span');
                        const windSpeed = document.querySelector('.details .wind-speed span');
                        const pressure = document.querySelector('.details .pressure span');
                        const deg = document.querySelector('.details .deg span');
                        const iconContainer = document.querySelector('.icon-container')
                        temperature.innerHTML = `${parseInt(json.main.temp)} <span>&deg</span>`;
                        description.innerHTML = `${json.weather[0].description}`;
                        humidity.innerHTML = `${json.main.humidity}%`;
                        windSpeed.innerHTML = `${parseInt(json.wind.speed)} <span>м/с</span>`;
                        pressure.innerHTML = `${json.main.pressure}`;
                        deg.innerHTML = `${json.wind.deg}`;
                        iconContainer.innerHTML = `<img src="http://openweathermap.org/img/w/${json.weather[0].icon}.png"/>`;
                    });
            else {
                let errMsg = null;
                const status = resp.status;
                if (status == 404)
                    errMsg = 'Місто або погода не знайдені';
                else if (status == 500)
                    errMsg = 'Внутрішня помилка серверу';
                else 
                    errMsg = 'Сталася прикра помилка. Наша кваліфікована команда розбирається з нею'
                alert(errMsg);
            }
        })
        .catch(error => {
            console.log('Error occured', error)
        })
})
