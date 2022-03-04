const express= require('express')
const router = express.Router()
const userController= require("../controller/user.controller")


// Ici nous definissions nos routes pour les differentes requettes du client;
//en associant les chemins de routage aux methodes de demande.

router.post('/add', userController.addUser);
router.get('/all', userController.getUsers);
router.delete('/delete/:id', userController.deleteUser);
router.put('/update/:id', userController.updateUser);
router.get('/all/:id',userController.getOneUser)


module.exports = router;