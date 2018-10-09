const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const conversationSchema = new Schema({
  participants: [{type: Schema.Types.ObjectId, ref: "User"}],
  messages: [{type: Schema.Types.ObjectId, ref: "Message"}],
  open:  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
