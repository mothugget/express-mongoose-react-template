'use strict';

import mongoose from 'mongoose';


mongoose.connect(`mongodb://localhost:27017/expressmongoose`);

export default mongoose;

// mongosh -> use Database_Name