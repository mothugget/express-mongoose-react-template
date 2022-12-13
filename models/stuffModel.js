'use strict';

import mongoose from './index.js';

const Schema = mongoose.Schema;

const stuffSchema = new Schema({
    goodstuff: Boolean,
    stuffcontent: {
        type: String,
        unique: true
    },  
    timestamp: {
        type: Number,  
        default: Date.now
    }
});

const Stuff = mongoose.model('Stuff', stuffSchema);


export default Stuff;