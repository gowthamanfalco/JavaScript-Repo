function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
        return "Month is invalid";
    }
    else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return "29 days";
        }
        else {
            return "28 days";
        }
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return "30 days";
    } else {
    return "31 days";
    }
    }
    var month = parseInt(prompt("Enter the month"));
    var year = parseInt(prompt("Enter the year"));
    var result = findDaysInMonth(month,year);
    console.log(result);
    document.write("The month has "+result);