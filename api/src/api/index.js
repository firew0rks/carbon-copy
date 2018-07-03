import { version } from '../../package.json';
import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/', (req, res) => {
    const url = 'http://elasticsearch:9200';
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(body => res.json(body));
})

export default router;
