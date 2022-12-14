const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String, unique: true, required: true},
    
    month:[{
        Year:{type: Number},    
        Jan:{type: Number},
        Feb:{type: Number},
        Mar:{type: Number},
        Apr:{type: Number},
        Maj:{type: Number},
        Jun:{type: Number},
        Jul:{type: Number},
        Aug:{type: Number},
        Sep:{type: Number},
        Oct:{type: Number},
        Nov:{type: Number},
        Dec:{type: Number}
    }]
})

module.exports = model('mainusers', UserSchema);