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

// update skills
export const updateSkills = async(req, res) =>{

    const id = req.params.id
    try {
        const updatedSkills = await Skills.findByIdAndUpdate(id, {
            $set:req.body
        }, {new:true})
        res
            .status(200)
            .json({success:true, 
                message:'Successful Updated',
                data:updatedSkills,
            });
    } catch (error) {
        res
        .status(500)
        .json({success:false, 
            message:'Not saved',
        });
    }
}

//delete skills

export const deleteSkills = async(req, res) =>{

    const id = req.params.id
    try {
        const deletedSkills = await Skills.findByIdAndDelete(id, {
            $set:req.body
        }, {new:true})
        res
            .status(200)
            .json({success:true, 
                message:'Successful Deleted',
                data:deletedSkills,
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
        res.status(404).json({success:false, message:'Not Found'});
    }
};


//GET TOUR BY SKILLS?

export const getSkillsBySearch = async (req, res) =>{
    
    const city = new RegExp(req.query.skills, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query,maxGroupSize)
    
    try {
        
        const tours = await Skills.find({ city, distance:{$gte:distence},
        maxGroupSize:{$gte:maxGroupSize}})

        res.status(200).json({
            success:true,
            message: "Successful",
            data:tours
        });
    } catch (error) {
        res.status(404).json({success:false, message:'Not Found'});
        
    }
}

//tours by feature
export const getSkillsbyFeature = async (req,res) =>{

    try {
        const tours = await Tour.find({featured:true}).limit(6)
        res.status(200).json({
            success:true,
            message:"Sucessful",
            data:tours
        });
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Not Found"
        })
        
    }
}

//tours by counts
export const getByCounts = async (req,res) =>{

    try {
        const tours = await Tour.estimatedDocumentCount({})
        res.status(200).json({
            success:true,
            message:"Sucessful",
            data:tours
        });
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Not Found"
        })
        
    }
}
