
let openingDay = new Date("March 21, 2023 23:59:59").getTime();



let expired = setInterval(function () {

    let currentDate = new Date().getTime();


    let difference = openingDay - currentDate;
    var day = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if (difference < 0) {
        clearInterval(expired);
        document.getElementById("ex").innerHTML = "عفواً انتهت صلاحية العرض";
    }

}, 1000);