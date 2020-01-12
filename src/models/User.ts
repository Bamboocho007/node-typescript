import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript'
import { Order } from './Order';
 
@Table({
    timestamps: false,
    tableName: "users"
})
class User extends Model<User> {
 
  @Column( DataType.STRING )
  firstname: string;
 
  @Column
  age: number;

  @Column
  creationdate: Date;

  @HasMany(() => Order)
  players: Order[];

}

export { User }