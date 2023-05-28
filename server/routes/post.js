import express from "express"
const router=express.Router()
import {publish} from "../controllers/post.js"
import { explore } from "../controllers/post.js"
router.post("/publish",publish)
router.get("/publish",explore)
// router.post("/register",register)

export default router