const express = require('express')

//initializations
const app = express()

//Settings
app.set('port',3000)

//Start server 
app.listen(app.get('port'), (req,res)=>{
    console.log('Server: ON, Port: ', app.get('port'))
})