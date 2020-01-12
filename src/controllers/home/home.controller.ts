import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../../interfaces/IControllerBase.interface'
import { User } from "../../models/User"
import { Order } from "../../models/Order"

class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = async (req: Request, res: Response) => {
        const Orders = await Order.findAll({
            include: [
                {
                    model: User,
                    required: false,
                    where: {age: 20}
                }
            ]
        })

        res.json({ Orders })
    }
}

export default HomeController