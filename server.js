const express  = require('express');
const app = express()
app.get('/', (req,res) => {
    res.send('helloo dear')
})
const suricontentof = (req,res,next) =>{
    if(req.params.name === "ok"){
      next()
    }else {
        res.send('sorry bro')
    }
}
app.get('/usr/:name',suricontentof,(req,res) => {
    res.send('<h1>well come suri gi </h1>')
})

app.listen(2000 ,()=>{
    console.log('im working on 200 ')
})