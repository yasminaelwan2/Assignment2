const request = require('request')
const newscode = (callback) =>{
    const newscodeUrl = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=6ee084961db84c9fb55d81a8ef900019'
request({url:newscodeUrl,json:true},(error,response)=>{
    if(error){
        callback('Error has occurred',undefined)
    }
    else if (response.body.message){
        callback('Invalid key',undefined)
    }
    else{     
        callback(response.body)
    }
})
}
module.exports = newscode