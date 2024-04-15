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

const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items'
const apiKey = "x147949773dfc1837f8569apf1"

// listening for port 3000
app.listen(3000, () => console.log(`Server is running on ${port}`))

// Fetch visitor count from db
app.get('/vistor-count', (req, res) => {
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

// Log new visitor in db
app.put('/send-data', async (req, res) => {

    try {
        // Data to send
        const dataToSend = {
            id: '123.456.78.39'
        };

        // Config for Axios request
        const config = {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            }
        };

        // Sending the PUT request using Axios
        const response = await axios.put('https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items', dataToSend, config);

        // Respond with the data from the API
        res.json(response.data);
    } catch (error) {
        // If an error occurs, respond with the error message
        res.status(500).json({ error: error.message });
    }
});