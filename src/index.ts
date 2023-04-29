import express from "express";
import cors from "cors";
import { userRouter, authRouter, messageRouter } from "./routes";

const app = express()
const port = process.env.PORT || 8081 

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(authRouter)
app.use(messageRouter)

app.listen(port, () => console.log(port))