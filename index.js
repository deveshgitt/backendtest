import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './Routes/index.js'

const app = express()
dotenv.config()
app.use(morgan('dev'))
app.use(cors())


app.use('/api/v2',router)



mongoose.connect(process.env.MONGOURL).then(()=>console.log("database is connected"))
app.listen(8000,()=>console.log("app is running on port 8000"))