const express = require('express')
const cors = require('cors');
const PORT =  8080
const app = express();
const data = require('./index.db.json');


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.get('/', (req, res) => {
    res.send(data)
})



app.listen(PORT, async() => {
    console.log('server started on port http://localhost:8080')}
)