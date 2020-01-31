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
// 订单状态
filter.getOrderStatusFilter = value => {
  switch (value) {
    case 1:
      value = "待支付";
      break;
    case 2:
      value = "已支付";
      break;
    case 4:
      value = "退款中";
      break;
    case 5:
      value = "已退款";
      break;
    case 7:
      value = "已核销";
      break;
    case 9:
      value = "已取消";
      break;
  }
  return value;
};
// 支付方式
filter.getPayTypeFilter = value => {
  switch (value) {
    case 0:
      value = "现金";
      break;
    case 1:
      value = "微信";
      break;
    case 2:
      value = "支付宝";
      break;
    case 3:
      value = "微信";
      break;
    case 4:
      value = "支付宝";
      break;
    case 5:
      value = "到店支付";
      break;
    case 6:
      value = "货到付款";
      break;
    case 7:
      value = "翼支付";
      break;
    default:
      value = "--";
  }
  return value;
};
export default {
  install(Vue) {
    for (let key in filter) {
      Vue.filter(key, filter[key]);
    }
  }
};
