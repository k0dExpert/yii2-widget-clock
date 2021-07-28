window.onload = function() {

    document.querySelectorAll('[data-clock=true]').forEach(function(clock){

        let dateCurrent = clock.getAttribute('data-time') * 1;

        let time_update = function(dateCurrent) {

            let date = new Date(dateCurrent * 1000);
            // Day
            let day = date.getUTCDate();
            clock.querySelector('.day-clock').innerHTML = (day < 10 ? '0' : '') + day;

            // Month
            let month = date.getUTCMonth();
            month += 1;
            clock.querySelector('.month-clock').innerHTML = (month < 10 ? '0' : '') + month;

            // Year
            let year = date.getUTCFullYear();
            clock.querySelector('.year-clock').innerHTML = year;

            // Minutes
            let minutes = date.getUTCMinutes();
            clock.querySelector('.minutes-clock').innerHTML = (minutes < 10 ? '0' : '') + minutes;

            // Hours
            let hours = date.getUTCHours();
            clock.querySelector('.hours-clock').innerHTML = (hours < 10 ? '0' : '') + hours;
        };

        if (dateCurrent) {
            time_update(dateCurrent);
            setInterval(function (){
                let time = new Date().getTime();
                let deltaTime = parseInt(time/1000) - dateCurrent;

                dateCurrent += deltaTime;
                time_update(dateCurrent);
            }, 1000);
        }
    });
};