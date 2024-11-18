const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
require('dotenv').config()

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.Google_Generative_API_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-002" });

app.post('/gemini', async (req,res)=> {
    const chat = model.startChat({
        history : req.body.history
    })
    const msg = req.body.message
    const results = await chat.sendMessage(msg)
    const response =  await results.response
    const text = response.text()
    res.send(text)

})

app.listen(PORT, ()=> console.log('listening on ' + PORT))