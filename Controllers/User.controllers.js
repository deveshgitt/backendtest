import UserModels from "../Modals/User.models.js"

export const CreateUser = async (req,res)=>{
    try{
        const {userName,email,password,type} = req.body
        if(!userName || !email || !password || !type)return res.status(401).json({success:false,message:"all data mandotory"})

        const user = new UserModels({
            userName,email,password,type
        })
         await user.save()

        return res.status(200).json({success:true,message:"user created succesfully"})
    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}

export const Login = async(req,res)=>{
    try{
        const{email,password} = req.body
        if(!email || !password)return res.status(401).json({success:false,message:"all data mandotory"})

        const user = await UserModels.findOne({email:email})
        if(!user)return res.status(401).json({success:false,message:"all data mandotory"})

        
    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const {id} = req.body
        const user = await UserModels
        return res.status(200).json({success:true,message:"user created succesfully"})
    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}