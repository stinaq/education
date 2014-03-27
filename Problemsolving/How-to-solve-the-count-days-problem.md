// How to solve the count-days problem

var nextDay = function (firstDate) {
    var year = firstDate[0];
    var month = firstDate[1];
    var day = firstDate[2];

    if (day < 30) {
        day ++;
    } else if (month < 12) {
        day = 1;
        month ++;
    } else {
        year ++;
        month = 1;
        day = 1;
    }
    return [year, month, day];
};


var isDateBefore = function (firstDate, secondDate) {
    var year1 = firstDate[0];
    var month1 = firstDate[1];
    var day1 = firstDate[2];

    var year2 = secondDate[0];
    var month2 = secondDate[1];
    var day2 = secondDate[2];

    if (year1 < year2) {
        return true;
    } else if (year1 === year2 && month1 < month2) {
        return true;
    } else if (year1 === year2 && month1 === month2 && day1 < day2) {
        return true;
    }
    return false;
};


var calculateDays = function (firstDate, secondDate) {
    var minDate = firstDate;
    var days = 0;
    while (isDateBefore(minDate, secondDate)) {
        days ++;
        minDate = nextDay(minDate);
    }
    return days;
};
