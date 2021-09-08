import express, {Application} from "express";

export class App {
    app: Application
    port: number

    constructor(controllers: any[], port: number) {
        this.app = express()
        this.port = port

        this.initMiddlewares()
        this.initControllers(controllers)
    }

    private initMiddlewares() {
        this.app.use(express.json())
    }

    private initControllers(controllers: any[]) {
        controllers.forEach((controller: any) => {
            this.app.use('/api', controller.router)
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${ this.port }`)
        })
    }
}
