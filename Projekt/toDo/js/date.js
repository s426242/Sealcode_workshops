(function() {
    function leadingZero(i) {
        return (i < 10)? '0'+i : i;
    }

    function showTextTime() {
        var currentDate = new Date();
        var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
        var textDate = leadingZero(currentDate.getDate()) + "." + leadingZero((currentDate.getMonth()+1)) + "." + currentDate.getFullYear() + " - " + days[currentDate.getDay()];

        document.querySelector('#Data').innerHTML = textDate;

        setTimeout(function() {
            showTextTime()
        }, 1000);
    }

    showTextTime();
})();
