echo "-----------"
echo "Provisioning elasticsearch mappings and analyzers...."
echo "-----------"
curl -XPUT "http://elasticsearch:9200/ticket" -H 'Content-Type: application/json' -d'{  "mappings": {    "ticket": {      "properties": {        "status": {          "type": "keyword"        },        "problem_abstract": {          "type": "text",          "analyzer": "english",          "fields": {            "std": {              "type": "text",              "analyzer": "standard"            }          }        }      }    }  }}'
echo "-----------"
echo "Indexing ticket data..."
echo "-----------"
elasticsearch_loader --index ticket --es-host "http://elasticsearch:9200" --type ticket json /deepdive.json
