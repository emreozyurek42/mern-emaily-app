const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');
const billing = require('./routes/billing');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI, {useMongoClient: true})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
   maxAge: 30*24*60*60*1000,
   keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/billing', billing);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});