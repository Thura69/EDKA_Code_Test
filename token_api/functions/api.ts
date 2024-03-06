import express from 'express'
import { Routes } from '../src/routes';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { User } from '../src/entities/user.entity';




const app = express();
app.use(express.json());

app.use(cors());



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


app.listen(3004, () => {
  console.log("Server is now running");
  Routes(app);
});


}).catch(error => console.log(error));




