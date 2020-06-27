import Tabletop from "tabletop";
import { Session } from "./sesstion";

class Api {
  getVirusList(callback) {
    if (!Session.vaccineList) {
      Tabletop.init({
        key: "1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q",
        callback: function(list) {
          Session.vaccineList = Object.assign([], list.vaccineData.elements);
          callback(Session.vaccineList);
        }
      });
    } else {
      callback(Session.vaccineList);
    }
  }
}

let apiService = new Api();
let selectedVaccine = {};

export { apiService, selectedVaccine };
