import * as functions from 'firebase-functions';
import * as axios from 'axios';
import * as express from 'express';
import cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const DEEZER_SEARCH_URL = 'https://api.deezer.com/search?q=';

app.get('/:query', async (request, response) => {
    const { query } = request.params;

    try {
        const url = `${DEEZER_SEARCH_URL}${query}`;
        const result = await axios.default.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        const searchResults = result.data;
        response.status(200).send(searchResults);
    } catch (err) {
        console.error(err);
    }
});

export const search = functions.https.onRequest(app);
