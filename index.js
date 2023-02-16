import express from 'express'

const app = express()
const port = 9000

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

app.use('/',(req,res)=>{
    res.json({message:'request received'})
})