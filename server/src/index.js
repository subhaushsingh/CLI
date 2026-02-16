import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();


const port = process.env.PORT;



app.get("/health",(req,res)=>{
    res.status(200).send('OK')
});


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})