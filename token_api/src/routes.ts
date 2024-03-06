import { Express, Router } from 'express';
import { UsersRoute } from './routes/users.routes';


export function Routes(app: Router) {
    //user Route
    UsersRoute(app);
};