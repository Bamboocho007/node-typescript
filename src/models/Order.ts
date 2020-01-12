import {Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import { User } from './User'
 
@Table({
    timestamps: false,
    tableName: "orders"
})
class Order extends Model<Order> {
 
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User) 
  user: User;

}

export { Order }