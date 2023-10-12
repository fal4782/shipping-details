const express = require('express')
require('./db/connection')
const router = require('./api/routes/routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})