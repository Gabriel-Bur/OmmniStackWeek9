const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const app = express();


mongoose.connect("mongodb+srv://omnistack:omnistack@"+
"omnistackweek9-k496g.mongodb.net/week09?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files',express.static(path.resolve(__dirname,'..', 'uploads')));


app.listen(3030);
 