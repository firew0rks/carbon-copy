import { version } from '../../package.json';
import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/hello', (request, response) => {
    var messageJSONObject = {
        message: "ahsdjashdjhasjdh",
        hello: 1234,
        isItTrue: false,
        name: "sing",
        age: 156
    }

    return response.json(messageJSONObject);
})

router.post('/world',(request,response) => {
    console.log(request.body)

    var fieldnumber = request.body.field

    var failresponse ={
        message: "This field " +  fieldnumber + " can not be stored"
        }
    return response.json(failresponse);
    
})

router.post('/melon',(request,response) => {
    var id = request.query.id;
    var name = request.body.name
    var printparam ={
        "id": id,
        "name": name
    }
return response.json(printparam);

    
})

router.post('/Shakespear',(request,response) => {
var url = 'http://localhost:9200/_search'
var speaker = request.body.speaker

var query = {
    "query" : {
        "match" : { "speaker": speaker}  
        }
}

    var options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body:JSON.stringify(query)
    }
           
    return fetch(url, options)
       
        .then(res => res.json())
        .then(body=> {
            console.log(body);
            return response.json(body);
        })
  
    })
router.get('/GetTicket',(request,response) => {
    var number = request.query.number;
var url = 'http://localhost:9200/ticket/_search?q=ticket_number:'+number;
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        }
      
    } 
    return fetch(url, options)
       
        .then(res => res.json())
        .then(body=> {
            console.log(body);
            return response.json(body.hits.hits[0]);
        })
  
    })
router.post('/GetAllTickets',(request,response) => {
var url = 'http://localhost:9200/ticket/_search?size=5000'

var query = {
    "query": { "match_all": {} },
    "sort": [
      { "ticket_number": "asc" }
    ]
}

    var options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body:JSON.stringify(query)
    } 
    return fetch(url, options)
       
        .then(res => res.json())
        .then(body=> {
            console.log(body);
            return response.json(
                body.hits.hits
                .map(ticket => {return ticket._source})
            );
        })
  
    })
router.put('/Query',(request,response) => {
var url = 'http://localhost:9200/ticket/_search?size=3'
var shortdes = request.body.problem_abstract;
var status = request.body.status;

var query = {
    "query": {
        "bool":{
          "should": [
            {"match": { "status": status}},
  
            {"multi_match": {
              "query":  problem_abstract,
              "type":   "most_fields", 
              "fields": [ "problem_abstract^5", "problem_abstract.std" ]
          }
          }]
  }
  }
}

    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body:JSON.stringify(query)
    } 
    return fetch(url, options)
       
        .then(res => res.json())
        .then(body=> {
            console.log(body);
            return response.json(
                body.hits.hits
                .map(ticket => {return ticket._source})
            );
        })
  
    })
   
// router.get('/Speaker', (req, res) => {
//     console.log(req.body.json())
//     var message=req.body.message;
//     var url = 'http://localhost:9200/Speaker'
//     var options = {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         }
//     };
//     body:JSON.stringify(
//         {
//             "query": {
//                 "match" : {
//                     "message" : message
//                 }
//             }
//         }
//     )
// };
//     fetch(url, options,body)
//         .then(res => res.json())
//         .then(body => res.json(body));
// })

export default router;
