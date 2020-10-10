const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (typeof date === "undefined")
        return 'Unable to determine the time of year!';
    let f1 = false;
    let f2 = false;
    let f3 = false;
    let year = Date.prototype.getFullYear.call(date);
    let month = Date.prototype.getMonth.call(date);
    let day = Date.prototype.getDate.call(date);
    if (year >= 1 && year <= 9999) {
        f1 = true;
    }

    if ((month >= 0) && (month <= 11)) {
        f2 = true;
    }

    if ((day >= 1) && (month <= 31)) {
        f3 = true;
    }

    if ((f1 === true) && (f2 === true) && (f3 === true)) {
        switch (month) {
            case 0:
                return 'winter';
                break;
            case 1:
                return 'winter';
                break;
            case 2:
                return 'spring';
                break;
            case 3:
                return 'spring';
                break;
            case 4:
                return 'spring';
                break;
            case 5:
                return 'summer';
                break;
            case 6:
                return 'summer';
                break;
            case 7:
                return 'summer';
                break;
            case 8:
                return 'autumn';
                break;
            case 9:
                return 'autumn';
                break;
            case 10:
                return 'autumn';
                break;
            case 11:
                return 'winter';
                break;
        }
    } else
        console.log('Error');
};