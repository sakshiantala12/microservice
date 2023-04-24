const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    comments: [
        {
            _id: {type: String, required: true},
            title: { type: String},
            postId:{type : String}
        }
    ]

})

module.exports = new mongoose.model("post", postSchema)