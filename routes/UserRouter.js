import express from 'express';
import  { contactUs }  from '../controllers/userController.js';

const UserRouter = express.Router();


  UserRouter.post('/contactUs',contactUs);
  //UserRouter.post('/submit',submit);

  export default UserRouter;
  