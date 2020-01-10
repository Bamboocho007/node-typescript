import {Table, Column, ForeignKey, Model, DataType} from 'sequelize-typescript'
import { User } from './User'
 
@Table({
    timestamps: false,
    tableName: "orders"
})
class Order extends Model<Order> {
 
  @ForeignKey(() => User)
  @Column
  user_id: number;

}

export { Order }