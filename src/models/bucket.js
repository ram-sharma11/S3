const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bucketSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  active: {type: Boolean, default:true}
});

const Bucket = mongoose.model('Bucket', bucketSchema);

module.exports = Bucket;