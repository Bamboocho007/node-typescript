import {Table, Column, Model, DataType} from 'sequelize-typescript'
 
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

}

export { User }