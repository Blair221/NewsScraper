const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let NoteSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        unique: true,
        required: true
    }
});

let Notes = mongoose.model("Notes", NoteSchema);

module.exports = Notes;