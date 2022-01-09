# getir-assignment
curl --location --request POST 'http://localhost:8080/api/search' \
--header 'Content-Type: application/json' \
--data-raw '{

"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000

}'
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