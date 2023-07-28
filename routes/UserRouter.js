import express from 'express';
import  { contactUs , sendemail}  from '../controllers/userController.js';

const UserRouter = express.Router();


  UserRouter.post('/contactUs',contactUs);
  UserRouter.post('/sendemail',sendemail);

  export default UserRouter;
  