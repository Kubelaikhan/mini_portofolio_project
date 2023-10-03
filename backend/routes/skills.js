import express from "express";
import{ getAllSkills } from "../controllers/SkillsController.js";


const router = express.Router();

router
    .get("/", getAllSkills)

export default router;