const earningmodul = require('../models/earning-modul')

class EarningService {
    async getData(){
        const user = await earningmodul.findOne({name: "Evano"});
        return user;
    }
}

module.exports = new EarningService