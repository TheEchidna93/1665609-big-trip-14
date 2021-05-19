export const Utils = {
  capitalize: (str) => { return str[0].toUpperCase() + str.slice(1); },
  prefixByZero: (date) => { return date > 10 ? date : '0' + date; },
  getTime: (date) => { return `${Utils.prefixByZero( date.getHours() )}:${Utils.prefixByZero( date.getMinutes() )}`; },
  formatDate: ( date ) => {
    let newDate = '';
    const month = date.getMonth();
    const day = date.getDate();
    switch (month) {
      case 1:
        newDate = 'JAN';
        break;
      case 2:
        newDate = 'FEB';
        break;
      case 3:
        newDate = 'MAR';
        break;
      case 4:
        newDate = 'APR';
        break;
      case 5:
        newDate = 'MAY';
        break;
      case 6:
        newDate = 'JUN';
        break;
      case 7:
        newDate = 'JUL';
        break;
      case 8:
        newDate = 'AUG';
        break;
      case 9:
        newDate = 'SEP';
        break;
      case 10:
        newDate = 'OCT';
        break;
      case 11:
        newDate = 'NOV';
        break;
      case 12:
        newDate = 'DEC';
        break;
      default:
        newDate = 'MONTH';
    }
    newDate = newDate + ` ${day > 10 ? day : '0' + day}`;

    return newDate;
  },
};
