const EarningService = require("../services/earning-service");

class EarningController {
    async getEarningData(req, res, next){
        try {
            const earningData = await EarningService.getData();
            return res.json(earningData);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new EarningController();