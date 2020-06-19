const { vaccineObj } = require("../contants/conts");

const Session = {
    get vaccineName() {
        return JSON.parse(sessionStorage.getItem("vaccineName"));
    },
    set vaccineName(value) {
        sessionStorage.setItem("vaccineName", JSON.stringify(value));
    }
}

export { Session }