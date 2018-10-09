const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  yearPublished: Number,
  minPlayers: Number,
  maxPlayers: Number,
  playingTime: Number,
  description: String,
  thumbnail: String,
  condition: String,
  ownerUser: [{type: Schema.Types.ObjectId, ref: "User"}]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
