//------------ REQUIRES------------//

const fs = require('fs')
const path = require('path')
const userController = require('../server/controllers/userController')
const {Pool} = require('pg')

//------------ CONNECT TO TESTING DB ------------//

const testDbURL = 'postgres://alrdxiqa:ZwmbRlHdknDvicDqprq-r_1QK8xYsrJ9@rajje.db.elephantsql.com/alrdxiqa'

const testPool = new Pool({
    connectionString: testDbURL
})

//this is labelled db because the controllers call it db
const db = {
    query: (text, params, callback) => {
        console.log(`test query ${text}`)
        return testPool.query(text, params, callback)
    }
}

//db user table is 'users'
//db user table schema is '_id, username, password'


//------------ DB USER TESTS ------------//

//------------ PW HASH TESTS ------------//

//SUCCESSFULLY HASHES PASSWORD

//------------ ADD USER TESTS ------------//

describe('add user test', () => {
    
    //WRITES A VALID USER TO THE USER TABLE

    describe('write a valid user to the user table', async () => {
        const values = ['testing, testing']
        const insertUser = `INSERT INTO users (username, password) VALUES ($1, $2)`
        await db.query(insertUser, values)
        const check = `SELECT * FROM users WHERE username = $1`
        const result = await db.query(check, [username])
        console.log(result)
        expect(result).not.toBeInstanceOf(Error)
    })
})


//RETURNS AN ERROR WHEN USERNAME ALREADY EXISTS



//------------ LOGIN USER TESTS ------------//

//SUCCESSFULLY LOGIN WITH VALID USERNAME AND PWORD

//FAIL TO LOGIN WITH INVALID USERNAME AND PWORD






// resource: https://betterprogramming.pub/database-testing-made-easy-with-jest-db96ad5f1f46

//notes:
//1. name this file db.test.js, not db.js, for the jest command to run
//2. install jest globally, and locally?