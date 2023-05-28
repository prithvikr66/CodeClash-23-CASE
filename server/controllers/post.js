import express from "express"
import Post from "../models/Post.js"
const app=express()

export const publish=async(req,res)=>{
    try {
        const {title,authors,abstract}=req.body
        const newPost=new Post({
            title,
            authors,
            abstract
        })

        const savedPost=await newPost.save()
        res.status(200).json(savedPost)

        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}

export const explore=async(req,res)=>{
    const searchTerm=req.query.search

    try {

        const article=await Post.findOne({
            $text:{$search:searchTerm}})
            res.json(article)
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}