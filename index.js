const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT); // redis client initialized

const app = express();

const setResponse = (username, repos) => {
    return `<h2>User ${username} has ${repos} github repositories</h2>`;
}

// Make request a Github for repository Data
async function getRepos(req, res) {
    try {
        console.log('Fetching data...');
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        const repos = data.public_repos;

        // Set public_repos data to redis
        client.setex(username, 3600, repos); // setex needs: key, seconds and value
        res.send(setResponse(username, repos));
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

/* Middleware cache: If the data is null, that is, the data is not in the redesign,
the next middleware (getRepos) is called. Therefore, the first time, getRepos will
always be executed, then in the following executions it will be cache who is called */
const cache = (req, res, next) => {
    const { username } = req.params;
    client.get(username, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(setResponse(username, data));
        } else {
            next();
        }
    });
}

app.get("/repos/:username", cache, getRepos);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});