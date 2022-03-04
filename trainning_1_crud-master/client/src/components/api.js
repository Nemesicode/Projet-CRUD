import axios from 'axios';

const url= "http://localhost:8000/api"

export const getUsers = async ()=>{
    return await axios.get(`${url}/all`)
}

export const addUser = async(user)=>{
    return await axios.post(`${url}/add`, user)
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/delete/${id}`)
}

export const getOneUser = async(id)=>{
    return await axios.get(`${url}/all/${id}`)
}

export const editUser = async(id,user)=>{
    return await axios.put(`${url}/update/${id}`,user)
}