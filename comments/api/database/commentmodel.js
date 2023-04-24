const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    postId:{
        type: String,
        require: true
    }
})

module.exports = new mongoose.model("comment", commentSchema)