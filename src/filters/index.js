let month = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12"
};
const filter = {};

/* 时间戳转化为 hh:mm */
filter.timeFilter1 = value => {
  if (!value) {
    return "--";
  } else {
    value = new Date(value);
    let h = value.getHours();
    let d = value.getMinutes();
    let m = d < 10 ? "0" + d : d;
    let str = h + ":" + m;
    return str;
  }
};

/* 折扣过滤器 */
filter.discountFilter = value => {
  if (!value) {
    return "--";
  } else if (value === 1) {
    return 10;
  } else {
    return (Number(value) * 10).toFixed(1);
  }
};

/* 时间戳转化为 yyyy-mm-dd hh:mm:ss */
filter.timeFilter = value => {
  if (!value) {
    return "--";
  } else {
    value = new Date(value);
    let num = value + "";
    let date = "";
    let str = num.split(" ");
    date = str[3] + "-";
    date = date + month[str[1]] + "-" + str[2] + " " + str[4];
    return date;
  }
};

/* 时间戳转化为 yyyy-mm-dd */
filter.orderTimeFilter2 = value => {
  if (!value) {
    return "--";
  } else {
    value = new Date(value);
    let num = value + "";
    let date = "";
    let str = num.split(" ");
    date = str[3] + "-";
    date = date + month[str[1]] + "-" + str[2];
    return date;
  }
};

/* 截取小数点前面的数 */
filter.integerPart = value => {
  if (!value) {
    return "--";
  } else {
    let att = value.toString().split(".");
    return att[0];
  }
};
/* 截取小数点后面的数 */
filter.fractionalPart = value => {
  if (!value) {
    return "--";
  } else {
    let att = value.toString().split(".");
    return att[1] ? att[1] : "00";
  }
};

/* 数字转化为带单位 */
filter.playCountFilter = value => {
  if (!value) {
    return "";
  } else if (value > 100000000) {
    value = (value / 100000000).toFixed(1) + "亿";
    return value;
  } else if (value > 100000) {
    value = Math.floor(value / 10000) + "万";
    return value;
  }
};

export default {
  install(Vue) {
    for (let key in filter) {
      Vue.filter(key, filter[key]);
    }
  }
};
