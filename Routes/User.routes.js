import { Router } from "express";
import { CreateUser } from "../Controllers/User.controllers.js";

const router = Router()

router.post('/create-user',CreateUser)

export default router