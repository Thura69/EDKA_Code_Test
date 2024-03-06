
import { Express, Router } from 'express';
import { UserSaveController } from '../controllers/usreController';
import { ValidateResource } from '../middlewares/ValidateResource';
import { UserSchema } from '../schema/user.schema';

export function UsersRoute(app: Router) {
  
  app.post("/users/submit", ValidateResource(UserSchema), UserSaveController);

}