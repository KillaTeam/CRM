const jwt = require('jsonwebtoken');
const tokenModule = require('../models/token-module');

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn:'30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn:'30d'});
        return {
            accessToken, 
            refreshToken
        }
    }
    async saveToken(userId, refreshToken){
        const tokenData = await tokenModule.findOne({name: userId})
    }
}