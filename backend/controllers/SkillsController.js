import Skills from "../model/SkillsSchema.js";


//CREATE NEW skills
export const createSkill = async(req, res)=>{
    const newSkills = new Skills(req.body)
    try {
        const savedSkills = await newSkills.save()
        res
            .status(200)
            .json({success:true, 
                message:'Successful',
                data:savedSkills,
            });
    } catch (error) {
        res
        .status(500)
        .json({success:false, 
            message:'Not saved',
        });
    }
}
//get all skills
export const getAllSkills = async(req, res) =>{
    try {
        const skills = await Skills.find({})
        res
            .status(200)
            .json({success:true, 
                message:'Successful', 
                data:skills});
    } catch (error) {
        res.status(404).json({success:false, message:'Not Found', data:skills});
    }
};
