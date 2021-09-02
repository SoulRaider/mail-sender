# mail-sender
This project is a TypeScript application that is configure to be run under linux or mac only.

# PREREQUISITE
This project uses Gmail as the SMTP transport layer, turn on Less secure app access for the gmail account (fromEmail/password) that is used for sending the email

Allow less secure apps: ON

# ARCHITECTURE
This project is developed with nodejs and express to provide the API layer with /mail

nodemailer is the tools use to send email through Gmail

default fromEmail and password should be specify and store in /src/config.json

# INSTALL DEPENDANCIES
open command prompt
cd into the mail-sender folder
in command prompt type:-
npm install

# SETUP for Testing
2 way to setup this project for testing

1. Run with Docker
open command prompt
cd into the mail-sender folder
in command prompt type:-
docker build -t mail-service .
docker run -p 8080:5000 mail-service

2. Run from project source
open command prompt
cd into the mail-sender folder
in command prompt type:-
npm run build
npm start

# TESTING
2 way to test this project

1. Run from browser
open browser
if Testing setup is with 1. Run from Docker
key in http://localhost:8080 in the url

if Testing setup is with 2. Run from project source
key in http://localhost:5000 in the url

2. Run with postman
# REMARKS
if fromEmail and password is not provided as the request data, it will use fromEmail and password from /src/config.json

open postman
if Testing setup is with 1. Run from Docker
select POST method
key in http://localhost:8080/mail in the request url
key in content-type with value application/json in the header
key in data below at the body/raw
{
    "fromEmail": <fromEmail>,
    "password": <password>,
    "toEmail": <toEmail>,
    "title": <title>,
    "content": <content>
}

if Testing setup is with 2. Run from Project source
select POST method
key in http://localhost:5000/mail in the request url
key in content-type with value application/json in the header
key in data below at the body/raw
{
    "fromEmail": <fromEmail>,
    "password": <password>,
    "toEmail": <toEmail>,
    "title": <title>,
    "content": <content>
}

# UNIT TEST and INTEGRATION TEST

1. Unit Test
Unit test is done with Jest, below is the list of test file in /test folder
gmailService.test.js

To run the test script, at the command prompt type:-
npm test

2. Integration Test
use postman and run the 2 step at # TEST
