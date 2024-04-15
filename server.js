// defining the server port
const port = 3000;

// initializing installed dependencies
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen(3000, () => console.log(`Server is running on ${port}`))

const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items'
const apiKey = "x147949773dfc1837f8569apf1"

// Fetch visitor count from db
app.get('/vistor-count', (req, res) => {
    const requestOptions = {
        method: 'GET',
        url: url,
        headers: {
            'Authorization': apiKey,
        },
    }
    axios.request(requestOptions)
    .then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
})

// Log new visitor in db
app.put('/send-data', (req, res) => {

    // Data to send
    const dataToSend = {
        id: req.body.id
    }

    const requestOptions = {
        headers: {
            'Authorization': apiKey,
            'Content-Type': 'application/json',
        }
    }
    axios.put(url, dataToSend, requestOptions)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        });
});