const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Ici nous definissons notre schema.
const userSchema = new Schema({
    prenom:{
        type:String,
        required: true
    },
    nom:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    sexe:{
        type:String,
        required: true
    },
    adresse:{
        type:String,
    },
    numero_telephone:{
        type:Number
    },

    email:{
        type:String
    },
    niveau_detude:{
        type:String,
        required: true
    },
    diplome_souhaite:{
        type:String,
        required: true
    }
})

module.exports= mongoose.model('user', userSchema);