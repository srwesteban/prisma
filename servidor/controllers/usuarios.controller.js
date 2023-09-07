/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Controlador de usuarios
 * En este metodo se definen los metodos de usuario
 */

const { PrismaClient } = require('@prisma/client');
const {response, request }=require('express');


const prisma=new PrismaClient();

const MostrarUsuarios = async(req=request, res=response)=>{
    const usuarios = await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        usuarios
    })

}

const AgregarUsuario = async(req=request, res=response)=>{

    const { email,  password} = req.body;
    
    const result = await prisma.user.create({
        data: {
            email,
            password
        }
    }).catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    })
}

const usuariosPut = (req=request, res=response)=>{
    res.send('Hola UCC')
}

module.exports = {
    MostrarUsuarios,
    AgregarUsuario,
    usuariosPut
}