const UserService = require("../services/user-service");

class UserController {
    // async registration (req, res, next){
    //     try {
            
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // async login (req, res, next){
    //     try {
            
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async getUserData(req, res, next){
        try {
            const userData = await UserService.getData();
            return res.json(userData)
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();