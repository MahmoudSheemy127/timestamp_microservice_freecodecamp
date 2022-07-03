const express = require('express')
const app = express()






//handle here basic routes
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})


//get time
app.get('/api/:date',(req,res) => {
    let date;
    date = new Date(req.params.date)
    
    if(date != "Invalid Date") 
    {
        //send json string
        res.json({
            utc: date.toUTCString(),
            unix: date.getTime(),
            date:date
        })
    }
    else
    {
        //check input unix format
        date = new Date(parseInt(req.params.date))
        if(date != "Invalid Date") 
        {
            //send json string
            res.json({
                utc: date.toUTCString(),
                unix: date.getTime(),
                date:date
            })
        }
        else
        {
            res.json({
            error:"invalid date"
        })
        }
    }
})


//empty date input
app.get('/api',(req,res)=>{
    date = new Date()
    res.json({
        utc: date.toUTCString(),
        unix: date.getTime(),
    })

})


//turn on server
app.listen(3000,() => {
    console.log("Server is listening at port 3000")
})

