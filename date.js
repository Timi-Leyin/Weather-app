let d = new Date();
const months = d.getUTCMonth();
const yy = d.getFullYear();
const days = d.getDay();
const da = d.getUTCDate();
const hh = d.getHours();
const min = d.getMinutes();
const sec = d.getSeconds();
let mm = '';
let dd = '';

switch (months) {
    case 0:
        mm = "January";
        break;


    case 1:
        mm = "Febuary";
        break;


    case 2:
        mm = "March";
        break;


    case 3:
        mm = "April";
        break;


    case 4:
        mm = "May";
        break;


    case 5:
        mm = "June";
        break;


    case 6:
        mm = "July";
        break;


    case 7:
        mm = "Auguest";
        break;


    case 8:
        mm = "September";
        break;


    case 9:
        mm = "October";
        break;


    case 10:
        mm = "November";
        break;


    case 11:
        mm = "December";
        break;
}

switch (days) {
    case 0:
        dd = "Sunday";
        break;


    case 1:
        dd = "Monday";
        break;


    case 2:
        dd = "Tuesday";
        break;


    case 3:
        dd = "Wednesday";
        break;


    case 4:
        dd = "Thursday";
        break;


    case 5:
        dd = "Friday";
        break;


    case 6:
        dd = "Saturday";
        break;

    default:
        dd = '--'

}
