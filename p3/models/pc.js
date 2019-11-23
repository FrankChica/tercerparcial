var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var pcSchema= new Schema({
    marca: {type:String},
    memoria:{type:Number},
    precio:{type:Number},
    tipo:{type:String, enum: ['portatilr', 'De escritorio']},
    sistema_operativo:{type:String}

});

module.exports = mongoose.model('pc', pcSchema);
