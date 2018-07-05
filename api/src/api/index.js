import {version} from '../../package.json';
import {Router} from 'express';
import fetch from 'node-fetch';

const router = Router();
const baseurl = 'http://localhost:9200';
router.get('/getTicket', (request, response) => {
    const number = request.query.number;
    const url = baseurl+ '/ticket/_search?q=ticket_number:' + number;
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        }

    };
    return fetch(url, options)

        .then(res => res.json())
        .then(body => {
            console.log(body);
            return response.json(body.hits.hits[0]._source);
        })

});
router.get('/getAllTickets', (request, response) => {
    const url = baseurl + '/ticket/_search?size=20';

    const query = {
        "query": {"term": {"status" : "Open"}}
    };

    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify(query)
    };
    return fetch(url, options)

        .then(res => res.json())
        .then(body => {
            console.log(body);
            return response.json(
                body.hits.hits
                    .map(ticket => {
                        return ticket._source
                    })
            );
        })

});
router.put('/query', (request, response) => {
    const url = baseurl + '/ticket/_search?size=3';
    const problem_abstract = request.body.problem_abstract;
    const query =
        { "min_score":0.5,
        "query": {
        "bool": {
            "must": [
                {"match": {"problem_abstract":{
                            "query":  problem_abstract,
                            "fuzziness":2}
                    }}],
                "should": [
                {
                    "term": {
                        "status": "Closed"
                    }
                },
                {
                    "term": {
                        "status": "Resolved"
                    }
                }
            ]
        }

    }
    };
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify(query)
    };
    return fetch(url, options)
        .then(res => res.json())
        .then(body => {
            console.log(body);
            const sum=body.hits.hits.reduce((accum,curr)=>{return accum+=curr._score},0);
            return response.json(
                body.hits.hits
                    .map(ticket => {
                        return {ticket:ticket._source, score: ticket._score/sum * 100}
                    })
            );
        })
});

export default router;
