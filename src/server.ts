import {App} from "./app"
import {UserController} from "./controllers/user.controller"
import {DbManager} from "./database/DbManager";
import {Globals} from "./config/globals";

const bootstrap = async () => {

    const dbManager = new DbManager({
        dbName: Globals.DB_NAME,
        dbUsername: Globals.DB_USER,
        dbPassword: Globals.DB_PASSWORD,
        dbHost: Globals.DB_HOST,
    })

    const isOK: boolean = await dbManager.testConnection()

    if (!isOK) {
        return
    }

    const controllers: any[] = [
        new UserController()
    ]
    const myApp = new App(controllers, 3000)
    myApp.listen()
}

bootstrap()
