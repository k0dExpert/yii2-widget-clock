window.onload = function() {

    document.querySelectorAll('[data-clock=true]').forEach(function(clock){

        let dateStart = clock.getAttribute('data-time') * 1;

        let time_update = function(dateStart) {
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