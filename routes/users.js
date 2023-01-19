import express from  "express"

const router = express.Router();

router.get("/",(req , res)=>{
    res.send("hello , this in users endpoint");
})

export default router;