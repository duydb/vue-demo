export const numberFixed = (number = 0, afterDot = 0, defaultText = '0') => {
  if (number) {
    var arr = `${parseFloat(number).toFixed(afterDot) || defaultText}`.split('.')
    return `${arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
      arr.length > 1 ? `.${arr[1].slice(0, 2)}` : ''
    }`
  }
  return defaultText
}

export const fileSize = (size) => {
  if (size >= 1000000000) {
    return `${numberFixed(size / 1000000000, 1)} GB`
  } else if (size >= 1000000) {
    return `${numberFixed(size / 1000000, 1)} MB`
  } else if (size > 1000) {
    return `${numberFixed(size / 1000, 1)} KB`
  }
  return `${numberFixed(size, 0)} Bytes`
}
