const {Schema, model} = require('mongoose');

const EarningSchema = new Schema({
    id: {type: Schema.Types.ObjectId, ref: 'User'},
    statsDashBoard:[
        {id: {type: Number}, stat_name: {type: String}, svgElement: {type: String}, money: {type: Number}, color: {type: String}}
    ],
})

module.exports = model('dashearning', EarningSchema);