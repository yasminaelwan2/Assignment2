const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const viewsPath = path.join(__dirname,'../temblate/views')
const newscode = require('./tools/newscode')

app.set('view engine', 'hbs');
app.set('views',viewsPath)

app.get('/',(req,res)=>{
newscode((error,response)=>{
    if(error){
        res.render('index',error)
    }
    else{
        res.send('index',response.articles)
        }
    })
})

app.listen(port, () => {
console.log(`Examplee app listening on port ${port}`)
})
