/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Controlador de usuarios
 * En este metodo se definen los metodos de usuario
 */

const { PrismaClient } = require('@prisma/client');
const { response, request } = require('express');

const prisma = new PrismaClient();

const MostrarUsuarios = async (req = request, res = response) => {
    const usuarios = await prisma.user.findMany().catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        usuarios
    });
}

const AgregarUsuario = async (req = request, res = response) => {
    const { email, password } = req.body;

    const result = await prisma.user.create({
        data: {
            email,
            password
        }
    }).catch((e) => {
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
}

const usuariosDelete = async (req = request, res = response) => {
    const userId = req.params.id;

    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: parseInt(userId)
            }
        });

        res.json({
            message: 'Usuario eliminado correctamente',
            deletedUser
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar el usuario',
            message: error.message
        });
    } finally {
        await prisma.$disconnect();
    }
}

const usuariosPut = async (req = request, res = response) => {
    const userId = req.params.id; // Suponiendo que el ID del usuario se pasa como parámetro en la URL
    const { email, password } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: parseInt(userId)
            },
            data: {
                email,
                password
            }
        });

        res.json({
            message: 'Usuario actualizado correctamente',
            updatedUser
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar el usuario',
            message: error.message
        });
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {
    MostrarUsuarios,
    AgregarUsuario,
    usuariosDelete,
    usuariosPut
}
