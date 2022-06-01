const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("It is working")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started successfully!!!")
})
