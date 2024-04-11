// defining the server port
const port = 3000;

// initializing installed dependencies
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

// listening for port 3000
app.listen(3000, ()=> console.log(`Server is running on ${port}` ))

const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items'
const apiKey = "x147949773dfc1837f8569apf1"

// API requests
app.get('/', (req, res) => {
    const requestOptions = {
        method: 'GET',
        url: url,
        headers: {
            'Authorization': apiKey,
        },
    }

    axios.request(requestOptions).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})
