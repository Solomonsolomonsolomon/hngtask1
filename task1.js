const http=require('http')
.createServer((req,res)=>{
   const json={
    slackUsername:"solomon",
    backend:true,
    age:19,
    bio:'my name is solomon and i am a backend developer who enjoys building tools with javascript..'
   }
    res.end(JSON.stringify(json))
}).listen(2300,(err)=>{
    if(err)throw err;
    console.log('listening on port 2300')
});
