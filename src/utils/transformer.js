// 转化为非负数
export const nonnegativeTransformer = value => {
  value = value + "";
  // 先把非数字的都替换掉，除了数字和.
  // eslint-disable-next-line no-useless-escape
  value = value.replace(/[^\d\.]/g, "");
  // 必须保证第一个为数字而不是.
  value = value.replace(/^\./g, "");
  // 保证只有出现一个.而没有多个.
  value = value.replace(/\.{2,}/g, ".");
  // 保证.只出现一次，而不能出现两次以上
  value = value
    .replace(".", "$#$")
    .replace(/\./g, "")
    .replace("$#$", ".");
  return value;
};

// 转化为正整数
export const positiveIntegerTransformer = value => {
  value = value + "";
  // 先把非数字的都替换掉
  value = value.replace(/[^\d]/g, "");
  // 不能0开头
  value = value.replace(/^0/, "");
  return value;
};

// 验证输入价格格式
export const pirceInputTransformer = value => {
  value = nonnegativeTransformer(value);
  // 不能00之类的开头
  value = value.replace(/^0\d/, "0");
  // 只能输入两位小数
  value = value.replace(/^(\d+)\.(\d\d).*$/, "$1.$2");
  return value;
};

// 数字化为价格
export const priceTransformer = value => {
  if (!value) {
    return "0.00";
  } else {
    return Number(value).toFixed(2);
  }
};

/**
 * 折扣设置输入规则
 * 1.只能输入数字，最多保留1位小数
 * 2.输入范围 [1,10]
 */
export const discountTransformer = value => {
  value = value + "";
  value = nonnegativeTransformer(value);
  if (value.indexOf("0") == 0) {
    value = value.replace(/(0?)(\d?)(\d*)/, "$1$3");
  }
  // 五位整数
  let part1 = value.replace(/(\d+)(\.?)(\d*)/, "$1");
  if (part1.length > 5) {
    part1 = part1.substring(0, 5);
  }
  // 只能输入二位小数
  let part2 = value.replace(/(\d+)(\.?)(\d?)(\d?)(\d*)/, "$3$4");
  value = part1 + (value.indexOf(".") > -1 ? "." : "") + part2;
  return value;
};
