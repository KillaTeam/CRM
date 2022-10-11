const bcrypt = require('bcrypt')
const TokenService = require('./token-service')
const UserDto = require("../dtos/user-dto")
const UserModul = require("../models/user-modul")



class UserService{
    async getData(){
        const user = await UserModul.findOne({name: "Evano"});
        if(!user){
            return {"Error": "Пользователь не найден"};
        }
        return user;
    }
    async registration(name, password){
        const candidate = await userModule.findOne({name});
        if(candidate){
            return {"Error" : "Пользователь не найден"};
        }
        const hash_pasword = await bcrypt.hash(password, 3);
        const add_user = await userModule.updateOne({name: name},{name: name, password: hash_pasword});

        const UserDto = new UserDto(name);
        const tokens = TokenService.generateTokens({...UserDto});
        await TokenService.saveToken(UserDto.id, tokens.refreshToken)

        return{
            ...tokens,
            name: UserDto
        }
    }
}
module.exports = new UserService;