const mongoose = require('mongoose');
const menuItmeSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    description:{
        type: String,
    },
    price: {
        type : String,
        required: true,
    
    }
    

})
const menuItem = mongoose.model('menuItem',menuItmeSchema);

mondule.export  = menuItem;
