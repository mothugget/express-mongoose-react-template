'use strict';

import express from 'express';
const app = express();

import router from './router.js';

const PORT = 3000;



app.use(express.static('./static'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
}); 