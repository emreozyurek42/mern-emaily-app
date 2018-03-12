const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const keys = require('./config/keys');
require('./services/passport');


mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const app = express();

app.use('/auth', auth);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});