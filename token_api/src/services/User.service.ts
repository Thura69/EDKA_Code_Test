import { getRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserInput } from "../types/user.types";

export async function UserSaveServices(user: UserInput) {
    try {

         return   await getRepository(User).save(user);

    } catch (e:any) {
        throw new Error(e)
    }
   
}

export async function GetUser(email:string) {
    try{
     return await getRepository(User).find({
        where:{
            email:email
        }
     })
    }catch(e:any){
        throw new Error(e)
    }
}