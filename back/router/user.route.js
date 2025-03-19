import express from 'express';
import { loginUser, registerUser, userCredits } from '../controller/userController.js';
import userAuth from '../middleware/Auth.js';

const route = express.Router();

// Sign Up route
route.post('/signup', registerUser)
// Signin/login route
route.post('/login', loginUser)
// credit route
route.get('/credits',userAuth, userCredits)


export default route;