import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/HundleUser.css';
import './api';
import axios from 'axios';
import { deleteUser } from './api';
import { useNavigate, Link } from 'react-router-dom';


function HandleUser() {

    let navigate = useNavigate()

//Cette variable va nous permettre de stocker les données recuperées.
    const [userlist,SetUserlist] = useState([])

//Ici nous avons la recuperation des données et l'affectation de
// ces dernieres dans notre variable userlist grace au hooks useState
    const fetchData = async()=>{
        const result = await axios('http://localhost:8000/api/all')
        SetUserlist(result.data)
    }

    useEffect(()=>{
        fetchData()
    },[]);

    const deleteOneUser = async(_id)=>{
        await deleteUser(_id);
        navigate('/Edit')
        navigate('/')
    }


    const editOneUser = ()=>{
        navigate("/Edit")
    }

    return ( 
        <div>
        <main className="my-5 mx-3">
        <table className="table table-striped userTable">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Age</th>
                <th scope="col">Sexe</th>
                <th scope="col">Numero</th>
                <th scope="col">Adresse</th>
                <th scope="col">Mail</th>
                <th scope="col">Niveau</th>
                <th scope="col">Diplome</th>
                <th scope="col">Éditer</th>
                <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody>

            {userlist.map((user,index)=>(
                <tr key={index}>
                    <th scope="row">{user._id}</th>
                    <td>{user.prenom}</td>
                    <td>{user.nom}</td>
                    <td>{user.age}</td>
                    <td>{user.sexe}</td>
                    <td>{user.numero_telephone}</td>
                    <td>{user.adresse}</td>
                    <td>{user.email}</td>
                    <td>{user.niveau_detude}</td>
                    <td>{user.diplome_souhaite}</td>

                   {/*  <td>Masculin</td>
                    <td>---</td>
                    <td>11</td>
                    <td>PA</td>
                    <td>30</td>
                    <td>---</td>
                    <td>Douleurs musculaire</td>
                    <td>Fièvre</td>
                    <td>Vomissement</td> */}
                    <td>
                    <Link to={{pathname:`/Edit/${user._id}`, state: user}}>
                        <button type="button" className="btn btn-outline-success" onClick={()=>editOneUser(user._id)}>Éditer</button>
                    </Link>
                    </td>
                    <td><button type="button" className="btn btn-outline-danger" onClick={()=>deleteOneUser(user._id)}>Supprimer</button></td>
                </tr>  
            ))}

                             
                
            </tbody>
        </table>


      </main>
        </div>
     );
}


export default HandleUser;