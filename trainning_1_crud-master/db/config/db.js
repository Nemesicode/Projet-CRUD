const mongoose = require('mongoose');

//Connexion a notre DB
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=>console.log('connect to DB'))
.catch((err)=>console.log('error:'+err))