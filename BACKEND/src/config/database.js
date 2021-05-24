const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/todo';
//seNewUrlParser: true para ter compatibilidade com outras versões de mongo
mongoose.connect(url, {useNewUrlParser: true});


module.exports = mongoose;
