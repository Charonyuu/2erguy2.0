const changeDateFormat = {
  getDateByDateTime: function (format, dateTime) {
    const dateObj = this.getDateObj(dateTime);
    const dateInfo = this.getDateInfo(dateObj);
    const dateFormat = this.formatDate(format, dateInfo);
    return dateFormat;
  },
  getDateObj: function (dateTime) {
    return dateTime ? new Date(dateTime) : new Date();
  },
  getDateInfo: function (dateObj) {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const second = dateObj.getSeconds();

    return { year, month, day, hour, minute, second };
  },
  formatDate: function (format, dateObj) {
    let output = format || "yyyy-MM-dd hh-mm-ss";
    output = output.replace(/yyyy/g, dateObj.year);
    output = output.replace(
      /MM/g,
      dateObj.month < 10 ? "0" + dateObj.month : dateObj.month
    );
    output = output.replace(
      /dd/g,
      dateObj.day < 10 ? "0" + dateObj.day : dateObj.day
    );
    output = output.replace(
      /hh/g,
      dateObj.hour < 10 ? "0" + dateObj.hour : dateObj.hour
    );
    output = output.replace(
      /mm/g,
      dateObj.minute < 10 ? "0" + dateObj.minute : dateObj.minute
    );
    output = output.replace(
      /ss/g,
      dateObj.second < 10 ? "0" + dateObj.second : dateObj.second
    );

    return output;
  },
};

export default changeDateFormat;
