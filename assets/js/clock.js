window.onload = function() {

    document.querySelectorAll('[data-clock=true]').forEach(function(clock){

        let dateStart = clock.getAttribute('data-time') * 1;

        let time_update = function(dateStart) {

            // Day
            let day = new Date(dateStart * 1000).getUTCDate();
            clock.querySelector('.day-clock').innerHTML = (day < 10 ? '0' : '') + day;

            // Month
            let month = new Date(dateStart * 1000).getUTCMonth();
            month += 1;
            clock.querySelector('.month-clock').innerHTML = (month < 10 ? '0' : '') + month;

            // Year
            let year = new Date(dateStart * 1000).getUTCFullYear();
            clock.querySelector('.year-clock').innerHTML = year;

            // Minutes
            let minutes = new Date(dateStart * 1000).getUTCMinutes();
            clock.querySelector('.minutes-clock').innerHTML = (minutes < 10 ? '0' : '') + minutes;

            // Hours
            let hours = new Date(dateStart * 1000).getUTCHours();
            clock.querySelector('.hours-clock').innerHTML = (hours < 10 ? '0' : '') + hours;
        };

        if (dateStart) {
            time_update(dateStart);
            setInterval(function (){
                dateStart += 1;
                time_update(dateStart);
            }, 1000);
        }
    });
};