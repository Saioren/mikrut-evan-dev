export const isArray = <T>(param: unknown): param is T[] => {
  if (!param) {
    console.log('Nothing provided to isArray(). Check your function call and data shape.')
    return false
  }

  if (param === null || param === undefined) {
    return false
  }

  if (!Array.isArray(param)) {
    return false
  }

  if (param.length === 0) {
    return false
  }

  return true
}
