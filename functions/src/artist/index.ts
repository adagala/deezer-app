import * as functions from 'firebase-functions';
import * as axios from 'axios';
import * as express from 'express';
import cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const DEEZER_ARTIST_URL = 'https://api.deezer.com/artist/';

app.get('/:id', async (request, response) => {
    const { id } = request.params;

    try {
        const url = `${DEEZER_ARTIST_URL}${id}`;
        const result = await axios.default.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        const artist = result.data;
        response.status(200).send(artist);
    } catch (err) {
        console.error(err);
    }
});

app.get('/:id/albums', async (request, response) => {
    const { id } = request.params;

    try {
        const url = `${DEEZER_ARTIST_URL}${id}/albums`;
        const result = await axios.default.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        const albums = result.data;
        response.status(200).send(albums);
    } catch (err) {
        console.error(err);
    }
});

app.get('/:id/top', async (request, response) => {
    const { id } = request.params;

    try {
        const url = `${DEEZER_ARTIST_URL}${id}/top`;
        const result = await axios.default.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        const tracks = result.data;
        response.status(200).send(tracks);
    } catch (err) {
        console.error(err);
    }
});

export const artist = functions.https.onRequest(app);
