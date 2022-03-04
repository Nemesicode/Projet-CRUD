import React, { useState } from 'react';
import './css/AddUser.css';
import './api';
import { addUser } from './api';
import { useNavigate } from 'react-router-dom'



const initialValue = {
    prenom:'',
    nom:'',
    age:'',
    sexe:'',
    adresse:'',
    numero_telephone:'',
    email:'',
    niveau_detude:'',
    diplome_souhaite:''
}


function AddUser() {

    const [user,setUser] = useState(initialValue);
    const { prenom,nom,age,sexe,adresse,numero_telephone,email,niveau_detude,diplome_souhaite }= user;

    let navigate = useNavigate()

    const onValueChange = (e)=>{
         setUser({...user, [e.target.name]: e.target.value}) //le "[e.target.name] permet de modifier les champs de tous les inputs"
                                                            // evitant ainsi de repeter une meme fonction
/*          console.log( e.target.value);
 */    }

    const addOneUser = async ()=>{
        await addUser(user);
/*         console.log(user);
 */
        navigate('/HundleUser') //On utilise cette ligne juste pour rafraichir notre page
        navigate('/')  // et ensuite revenir rapidement dans notre accueil.

    }

/*     console.log(user);
 */
    return ( 
        <div>
            <div className="formulaire">
                <input type="text" name='prenom' placeholder='prenom' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='nom' placeholder='nom' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="number" min="0" name='age' placeholder='age' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='sexe' placeholder='sexe' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="number" name='numero_telephone' placeholder='numero telephone' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='adresse' placeholder='adresse' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='email' placeholder='email' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='niveau_detude' placeholder='niveau d etude' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <input type="text" name='diplome_souhaite' placeholder='diplome souhaite' onChange={(e)=>onValueChange(e)}/>
                    <br/>
                <button type="button" className="btn btn-outline-success" onClick={()=>addOneUser()}>enregistrer</button>
            </div>           
        </div>
     );
}

export default AddUser;