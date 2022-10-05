const mongoose = require('mongoose');
const axios = require('axios');
const db = mongoose.connection;

mongoose.connect(`mongodb+srv://root:7bHe8PsFfJbhfWCc@clusterkill.pqxfdjt.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true }, function (err) {
 
    if (err) throw err;
 
    console.log('Successfully connected');
  
 });

// Schema

 var repSchema = mongoose.Schema({
    name: String,
 })

 var Data = mongoose.model('Data', repSchema);