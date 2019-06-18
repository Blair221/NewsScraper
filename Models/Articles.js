const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    summary: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Notes"
    }
});

let Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;