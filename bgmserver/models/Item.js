const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  yearPublished: String,
  image_url: String,
  condition: {
    type: String,
    enum: ["Nuevo", "Como Nuevo", "Muy Buena", "Buena", "Normal", "Mala"]
  },
  ownerUser: {type: Schema.Types.ObjectId, ref:'User'},

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
