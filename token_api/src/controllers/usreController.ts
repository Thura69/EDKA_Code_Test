import { Request, Response, NextFunction } from 'express';
import { GetUser, UserSaveServices } from '../services/User.service';
import bcrypt from 'bcrypt'
import config, { has } from 'config';
import { User } from '../entities/user.entity';
import { getRepository } from 'typeorm';
import { Fmsg } from '../utils/Fmsg';

export async function UserSaveController(req: Request, res: Response, next: NextFunction){
  try {

  const { username, email, phoneNumber, companyName } = req.body;


  const already = await GetUser(email);


  if(already.length >= 1) return res.status(409).send({con:false,msg:"Email is already existed!"});

  const user = new User();
  user.username = username;
  user.email = email;
  user.phoneNumber = phoneNumber;
  user.companyName = companyName


  const response =  await UserSaveServices(user);

   return Fmsg(res,"Validate Token",{token:response.token});

    } catch (e: any) {
        return res.status(500).send({ con: false, msg: `${e}` });
}    
};
