const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: 'string',
        required: false
    },
    body: {
        type: 'string',
        required: false
    },
    age:'String',
    sex:'String'
}, { timestamps: true });

const userModel = mongoose.model('user', UserSchema);

module.exports = userModel 