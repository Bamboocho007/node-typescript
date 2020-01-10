import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import {Sequelize} from 'sequelize-typescript'

import HomeController from './controllers/home/home.controller'

import { User } from './models/User'
import { Order } from './models/Order'

const app = new App({
    port: 5000,
    controllers: [ 
        new HomeController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

const sequelize =  new Sequelize({
    database: 'nodetype',
    dialect: 'postgres',
    username: 'postgres',
    password: 'admin',
    storage: ':memory:',
    models: [ User, Order ], 
})

app.listen()