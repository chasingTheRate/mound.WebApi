
const isValidDate = (date) => {
  var dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/
  return dateReg.test(date);
}

module.exports = {
  isValidDate
}