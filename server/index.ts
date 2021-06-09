import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())

app.get('/',(req,res)=>{
    res.json({message:"Welcome"})
})

app.listen(5000,()=>console.log("running on 5000"))