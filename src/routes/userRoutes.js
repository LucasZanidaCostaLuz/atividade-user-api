const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de casas
 */
router.get('/user', UserController.getAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Busca usuário por id
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/user/:id', UserController.getUserById);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/user', UserController.createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário deletada
 */
router.delete('/user/:id', UserController.deleteUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put('/user/:id', UserController.updateUser);

module.exports = router;