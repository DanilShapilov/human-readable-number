const numsMap = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety'
}

module.exports = function toReadable(number) {
  const numAsStr = number.toString()

  if (numAsStr.length === 1) {
    return numsMap[numAsStr]
  }

  if (numAsStr.length === 2) {
    return numsMap[numAsStr] || `${numsMap[numAsStr[0] * 10]} ${numsMap[numAsStr[1]]}`
  }

  if (numAsStr.length === 3) {
    if (+numAsStr[1] && +numAsStr[2]) {
      return numsMap[numAsStr.substring(1)] ?
        `${numsMap[numAsStr[0]]} hundred ${numsMap[numAsStr.substring(1)]}`
        :
        `${numsMap[numAsStr[0]]} hundred ${numsMap[numAsStr[1] * 10]} ${numsMap[numAsStr[2]]}`
    }
    if (+numAsStr[1] && +numAsStr[2] === 0) {
      return `${numsMap[numAsStr[0]]} hundred ${numsMap[numAsStr[1] * 10]}`
    }
    if (+numAsStr[1] === 0 && +numAsStr[2]) {
      return `${numsMap[numAsStr[0]]} hundred ${numsMap[numAsStr[2]]}`
    }
    return `${numsMap[numAsStr[0]]} hundred`
  }
}

