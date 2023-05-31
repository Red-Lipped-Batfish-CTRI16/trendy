const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

const server = 'http://localhost:3000';




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
        const query = {interest: 'bar', radius: '5'}
        it('responds with json', () => request(server)
            .get('/api/search')
            .expect('Content-Type', /application\/json/)
        )
    })
})
    

