// const { vaccineObj } = require("../contants/conts");

const Session = {
  get vaccineList() {
    return JSON.parse(sessionStorage.getItem('vaccineList'))
  },
  set vaccineList(value) {
    sessionStorage.setItem('vaccineList', JSON.stringify(value))
  }
}

export { Session }
