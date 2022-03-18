// 匹配手机
export const JunglePhone: (val: string) => boolean = (text) => {
  const pattern = new RegExp("^1[34578][0-9]{9}$", 'i')
  return pattern.test(text)
}