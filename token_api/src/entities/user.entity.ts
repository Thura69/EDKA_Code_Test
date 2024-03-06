import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Unique, BaseEntity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity() 
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string; 

  @Column()
  username!: string; 

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  companyName!:string


  @Column()
  token!: string;

  @BeforeInsert()
  async generateToken() {
    this.token = await this.generateRandomToken();
  }
  private async generateRandomToken(): Promise<string> {
    const existingTokens = await User.find({ select: ['token'] });
    let newToken: string;

    do {
      newToken = Math.floor(100000 + Math.random() * 900000).toString();
    } while (existingTokens.some((tokenObj) => tokenObj.token === newToken));

    return newToken;
  }
}
