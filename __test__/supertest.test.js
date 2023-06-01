const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

const server = 'http://localhost:3000';


async function isArray(res) {
    console.log(typeof res.text)
    const result = await JSON.parse(res.text)
    if (!Array.isArray(result)) {
        throw new Error('not an array')
    }
}

async function isError(res) {
    console.log(res, res.error)
}

describe('Route integration', () => {
    describe('/', () => {
        describe('GET', () => {
            // Note that we return the evaluation of `request` here! It evaluates to
            // a promise, so Jest knows not to say this test passes until that
            // promise resolves. See https://jestjs.io/docs/en/asynchronous
            it('responds with 200 status', () => request(server)
                .get('/')
                // .expect('Content-Type', /json/)
                // .expect('Content-Length', '15')
                .expect(200)
                
            )

            it('responds with html', () => request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                // .expect('Content-Length', '15')
                // .expect(200)
                
            )
        })
    })

    describe('/api/search', () => {
        const query = { location: 'wichita', interest: 'chicken', radius: '8050' }
        it('responds with json', () => request(server)
            .get('/api/search')
            .query(query)
            .expect('Content-Type', /application\/json/)
            // .expect(isArray)
            , 10000)
        
            it('responds with array of results', () => request(server)
            .get('/api/search')
            .query(query)
            // .expect('Content-Type', /application\/json/)
                .expect(isArray),
                10000
            )
        
        //frontend handles empty field, but what about postman?  no error handler
        it('responds with error when missing location', (done) => request(server)
            .get('/api/search')
            .query({ location: '123', interest: 'chicken', radius: '8050' })
            .expect(400), 1000)
          
        
    })

    describe('api/user', () => {
        it('responds with json', () => request(server)
            .get('/api/user')
            .expect(200)
            .expect('Content-Type', /application\/json/), 10000)
        
        it('responds with array of results', () => request(server)
            .get('/api/user')
            .expect(200)
            .expect(isArray), 10000)

    })


})
    

