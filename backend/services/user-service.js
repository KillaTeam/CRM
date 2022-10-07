const userModule = require("../models/user-module");
const bcrypt = require('bcrypt')

class UserService{
    async get_user_data(name, password){
        const candidate = await userModule.findOne({name})
        if(candidate){
            throw new Error('Пользователь не найден')
        }
        const get_data = await userModule.findMany
    }
    async registration(name, password){
        const candidate = await userModule.findOne({name})
        if(candidate){
            throw new Error('Пользователь не найден')
        }
        const hash_pasword = await bcrypt.hash(password, 3)
        const add_user = await userModule.updateOne({name: name},{name: name, password: hash_pasword})
    }
}
module.exports = new UserService;