const port=process.env.PORT || 2300;
const http=require('http')
.createServer((req,res)=>{
   const json={
    slackUsername:"Solomonsolomonsolomon",
    backend:true,
    age:19,
    bio:'my name is solomon and i am a backend developer who enjoys building tools with javascript..'
   }
    res.end(JSON.stringify(json))
}).listen(port,(err)=>{
    if(err)throw err;
    console.log(`listening on port ${port}`)
});
