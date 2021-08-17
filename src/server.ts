import express, {Request, Response} from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.json({name: "frank"})
})

app.listen(500)