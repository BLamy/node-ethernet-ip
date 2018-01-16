const { Socket } = require("net");
const { EIP_PORT } = require("../config");
const validator = require("validator");

class Controller {
    constructor(IP_ADDR) {
        if (!IP_ADDR) {
            throw new Error("ERROR: Controller <class> requires IP_ADDR <string>!!!");
        }

        if (!validator.isIP(IP_ADDR)) {
            throw Error("ERROR: Invalid IP_ADDR <string> passed to Controller <class>");
        }

        this.enip = {
            ip: IP_ADDR,
            session_id: null
        };
    }
}

module.exports.default = Controller;