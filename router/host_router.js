const express=require('express')
const hostRouter=express.Router()
const Blog=require('../models/home')

hostRouter.get('/register',(req,res)=>{
res.render('register')
})



hostRouter.post("/register", async (req, res) => {
  try {
    await Blog.create(req.body);
    res.render('register_result');
  } catch (err) {
    console.log(err);
    res.send("Error saving home");
  }
});



hostRouter.get("/admin_page", async (req, res) => {
  try {
    const registered_blogs = await Blog.find();
    res.render('admin_page', { registered_blogs });
  } catch (err) {
    console.log(err);
    res.send("Error fetching homes");
  }
});



// Booking form submit → save in MongoDB


hostRouter.get('/register_result',()=>{
res.render('register_result')
})


hostRouter.post('/delete-blog/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/admin_page'); 
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting home");
  }
}); 




hostRouter.post('/edit-blog/:id', async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin_page'); // home list page par wapas
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating home");
  }
});  




hostRouter.get('/edit-blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");
    res.render('edit_blog', { blog }); 
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching blog");
  }
});





exports.hostRouter=hostRouter