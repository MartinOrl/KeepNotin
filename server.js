const express = require('express');
const cors = require('cors');
const path = require('path')
const compression = require('compression')

const app = express();

const port = process.env.PORT || 5000;

app.use(compression())

app.use(cors())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port " + port)
})