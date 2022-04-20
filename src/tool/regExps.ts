// 匹配手机
export const JunglePhone: (val: string) => boolean = (text) => {
  const pattern = new RegExp("^1[34578][0-9]{9}$", 'i')
  return pattern.test(text)
}

// 判断是否含有中文
export const JungleChinese: (val: string) => boolean = (text) => {
  if(/.*[\u4e00-\u9fa5]+.*$/.test(text)) {
    return false;
  } 

  return true
}