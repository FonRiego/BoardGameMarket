const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  text: String,
  creatorUser : {type: Schema.Types.ObjectId, ref: "User"}

  // name: String,
  // yearPublished: Number,
  // minPlayers: Number,
  // maxPlayers: Number,
  // playingTime: Number,
  // description: String,
  // thumbnail: String,
  // condition: String,
  // ownerUser: [{type: Schema.Types.ObjectId, ref: "User"}]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
