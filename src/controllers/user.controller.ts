import {Router, Request, Response} from "express";
import {User} from "../models/user";

export class UserController {
    path = '/users'
    router = Router()

    users: User[] = []

    constructor() {
        this.initRoutes()
    }

    initRoutes() {
        this.router.get(this.path, this.getAllUsers)
        this.router.post(this.path, this.createUser)
    }

    getAllUsers(req: Request, res: Response) {
        console.log(this)
        res.status(200).json(this.users)
    }

    createUser(req: Request, res: Response) {
        const newUser: User = req.body
        this.users.push(newUser)
        res.status(200).json(newUser)
    }
}
