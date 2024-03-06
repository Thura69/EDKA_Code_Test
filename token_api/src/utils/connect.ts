// src/database.ts
import { createConnection } from 'typeorm';
import { User } from '../entities/user.entity';


createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Thuranthegreat69',
  database: 'generate-token',
  entities: [User],
  synchronize: true,
}).then(() => {
  console.log('Connected to the MySQL database');
}).catch(error => console.log(error));
