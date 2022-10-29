const app=require('express')();
const port=process.env.PORT || 2300;
app.use(require('cors')());
app.get('/',(req,res)=>{
    res.json({
    slackUsername:"Solomonsolomonsolomon",
    backend:true,
    age:19,
    bio:"my name is solomon and i enjoy building stuff with javascript"
    })
})
.listen(port,(err)=>{
if(err)throw err;
console.log(`port:${port} started`)
})