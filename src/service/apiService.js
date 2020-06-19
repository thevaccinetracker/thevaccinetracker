import Tabletop from "../../node_modules/tabletop";
import { Session } from "../service/sesstion";
import { vaccineObj } from "../contants/conts";

class Api {

    getVirusList(callback) {
        // let vaccineList = Session.vaccineName;
        // console.log(vaccineList);
        // if (!sessionStorage.getItem("virusList")) {
        Tabletop.init({
                key: "1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q",
                callback: function(list, tabletop) {
                    // let tempObj = {};
                    // Object.assign(tempObj, list);

                    // console.log(list, tabletop, tempObj)
                    //sessionStorage.setItem("virusList", JSON.stringify(list))
                    // Session.vaccineName = list;
                    callback(list);
                }
            })
            // } else {
            //     callback(JSON.parse(sessionStorage.getItem("virusList")))
            // }
    }
}

let apiService = new Api();
let selectedVaccine = {}

export { apiService, selectedVaccine }