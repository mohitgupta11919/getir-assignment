# getir-assignment

## Overview

A RESTful API that fetches the data in the provided MongoDB collection.

## Requirements

For development, you will need [Node.js] and a node global package manager.

to check if installation was successful run the following command .
```
$ node --version

v10.15.3

$ npm --version

6.4.1
```
## Installation
clone the repo 

cd getir-assignment

npm i

## Running
node .
app will be run on port 8000

## use
 url to hit : http://localhost:8000/api/search

The request payload will include a JSON with 4 fields. 
- “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format.
- “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.
- Sample: { "startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000 }

you can use the following command also from your terminal if running in local

curl --location --request POST 'http://localhost:8000/api/search' \
--header 'Content-Type: application/json' \
--data-raw '{

"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}'

## Tests

[Jest](https://jestjs.io/) framework has been used in order to running tests.
