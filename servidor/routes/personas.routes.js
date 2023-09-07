/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Rutas de usuario
 * en esta clase se definen las rutas de ususario
 */

const { Router } = require('express');

const router= Router();

/**
 * Importando metodos
 */
const { usuariosGet, usuariosPost, usuariosPut } = require('../controllers/usuarios.controller');

router.get('/', usuariosGet);
router.post('/',usuariosPost);
router.put('/',usuariosPut);


module.exports = router;