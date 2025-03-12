import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./configs/mongodb.js"
import { clerkWebhooks } from "./controllers/webhooks.js"

//initialize express
const app = express()

//connect DB
await connectDB()

//middlewares
app.use(cors())

//routes
app.get("/", (req, res) => res.send({ message: "API WORKING" }))
app.post("/clerk",express.json(),clerkWebhooks)

//PORT
const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`server running on Port - ${port} `)
})

