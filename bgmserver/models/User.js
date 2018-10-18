const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  avatarPath: {type: String, default:"/images/user_placeholder.png"},
  followedItems: [{type: Schema.Types.ObjectId, ref: "Item"}]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
