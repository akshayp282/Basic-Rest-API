import express from 'express';
import {getUser,createUser, getUsers,deleteUser, updateUser} from '../controllers/users.js';
const router = express.Router();
/*
GET /users : finds all users
POST /users creates a user
GET /users/:id finds user details
DELETE /users/:id deletes a user
PATCH /users/:id updates a user, partial modification
PUT complete modification of an existing user
*/
router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;