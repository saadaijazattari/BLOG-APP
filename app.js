const express = require('express');
const userRouter=require('./router/user_router')
const {hostRouter}=require('./router/host_router')
const path=require('path')
const rootdir=require('./utils/Pathutil')



const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./database')

app.use(userRouter)
app.use(hostRouter)
app.use(express.static(path.join(rootdir, 'public')))



app.use((req,res,next)=>{
  res.status(404).render('not_found');
});


// Start server
const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`Server running at http://localhost:${PORT}`);
});
