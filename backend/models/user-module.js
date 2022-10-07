const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String, unique: true, required: true},
    earning_money: {type: Number, default: 0},
    balance: {type: Number, default: 0},
    total_sales: {type: Number, default: 0} 
})

module.exports = model('User', UserSchema);