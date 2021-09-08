import {App} from "./app"
import {UserController} from "./controllers/user.controller"

const controllers: any[] = [
    new UserController()
]
const myApp = new App(controllers, 3000)
myApp.listen()
