import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    authors:{
        type:String,
        required:true
    },
    abstract:{
        type:String,
        required:true,
        min:50,
        max:5000
    }
})

const Post=mongoose.model("Post",postSchema)

export default Post