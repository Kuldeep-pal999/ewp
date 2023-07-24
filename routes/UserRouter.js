import express from 'express';
import  { signup , submit}  from '../controllers/userController.js';

const UserRouter = express.Router();


  UserRouter.post('/signup',signup);
  UserRouter.post('/submit',submit);

  export default UserRouter;
  