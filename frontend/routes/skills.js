import express from "express";
import{ getAllSkills, createSkill,  updateSkills, deleteSkills } from "../controllers/SkillsController.js";


const router = express.Router();

router
    .post("/", createSkill);

router
    .put("/", updateSkills);

router
    .delete('/:id', deleteSkills);

router
    .get("/", getAllSkills);

//getbysearch
// router.get("/search/getTourBySearch/", getTourBySearch);

export default router;