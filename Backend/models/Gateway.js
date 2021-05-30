const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Gateway = new Schema({

   id:{type:number},
    Latitude: {
       type: number
    },
    Longitutude: {
       type: number
    },
    description: {
       type: String
    },
   
 }, {
    collection: 'Gateways'
 })
 
 module.exports = mongoose.model('Gateway', Gateway)
