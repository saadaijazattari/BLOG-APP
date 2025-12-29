const express=require('express')
const userRouter=express.Router()
const Blog=require('../models/home')






userRouter.get("/", async (req, res) => {
  try {
    const registered_blogs = await Blog.find();
    res.render('home', { registered_blogs });
  } catch (err) {
    console.log(err);
    res.send("Error fetching homes");
  }
});





module.exports=userRouter