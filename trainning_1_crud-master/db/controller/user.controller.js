const User = require ('../model/model.user');

//addUser pour ajouter un nouveau utilisateur.
module.exports.addUser = (req,res)=>{
    const user = new User(req.body);
    user.save((err,user)=>{
        (err)? res.status(400).json({error: err}):
                res.status(200).json({user});
    });
}

//getUsers pour voir l'esnsemble des utilisateurs ajoutés.
module.exports.getUsers = (req,res)=>{
    User.find((err,user)=>{
        (err)? res.status(400).json({error:err}):
                res.status(200).json(user)
    })
}

//deleteUser permet de supprimer un utilisateur de la base
module.exports.deleteUser = (req,res)=>{
    User.findByIdAndRemove(req.params.id, (err,user)=>{
        (err)? res.status(400).json({error:err}):
                res.status(200).json({message :"user deleted"})
    })
}

//update, cette fonction va permettre de changer les infos d'un utlisateur.
module.exports.updateUser = (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body,(err,user)=>{
        (err)? (res.status(400).json({error: err})):
                (res.status(200).json({message:"user updated"}))
    })
}

//Rendre un seul user.
module.exports.getOneUser = (req,res) => {
    User.findById(req.params.id, (err,user)=>{
        (err)? (res.status(400).json({error: err})):
                (res.status(200).json(user))
    })
}