//------------ REQUIRES------------//

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

//------------ BEFORE/AFTER TEST FUNCTIONS  ------------//

 async function resetDb() {
    const string = `DELETE FROM users WHERE user_id > 0`
    await db.query(string)
            
}

 async function addUsers() {
    const string = `
    INSERT INTO users (username, password) VALUES
        ('test1', 'test1'),
        ('test2', 'test2'),
        ('test3', 'test3')
     `
    await db.query(string)
}
//------------  USER TABLE TESTS ------------//

//------------ ADD USER TESTS ------------//

describe('add user tests', () => {
    //refactor async .then and invoking done()
    beforeAll((done) => {
        // resetDb()
        done()
        // done()
    })
    afterAll(done => {
        resetDb()
        done()
    })
    
    //WRITES A VALID USER TO THE USER TABLE
    //testing db functionality used on line 27 of userController

    it('writes a valid user to the user table', async () => {
        const values = ['testing', 'testing']
        const insertUser = `INSERT INTO users (username, password) VALUES ($1, $2)`
        await db.query(insertUser, values)
        const check = `SELECT * FROM users WHERE username = $1`
        const result = await db.query(check, [values[0]])
        expect(result).not.toBeInstanceOf(Error)
    })

    

    //RETURNS AN ERROR WHEN USERNAME ALREADY EXISTS
    //testing db functionality used on line 22 of userController

    it('returns an error when username already exists', async () => {
        const values = ['testing', 'testing']
        const findUser = `SELECT * FROM users WHERE username = $1`
        const result = await db.query(findUser, [values[0]])
        expect(result.rows.length).toBeGreaterThan(0)
        
    })

})


//------------ GET USER TESTS ------------//


describe('get user tests', () => {

    beforeAll(done => {
        addUsers()
        done()
    })

    afterAll(done => {
        // resetDb()
        done()
    })
    //GETS ALL USERS FROM DB
    //testing db functionality used on line 7 of userController

    it('returns a response object with a property with array of users', async () => {
        const string = `SELECT * from users`
        const result = await db.query(string)
        expect(result.rows).toHaveLength(3)
    })

    it('the user array contains all previously added users', async () => {
        const string = `SELECT * from users`
        const resp = await db.query(string)
        let count = 1
        resp.rows.forEach(ele => {
            const result = 'test' + count
            expect(ele.username).toBe(result)
            count++
        })
        
    })
})




//~~~~~~~~~~~~~ EXTENSIONS ~~~~~~~~~~~~~//

//------------ USERS TABLE TESTS ------------//

//LOGIN WITH CORRECT PASSWORD WORKS

//ERROR WHEN WRONG PASSWORD

//ERROR WHEN NOT A USER

//------------ BUSINESS TABLE TESTS ------------//

//INSERTS NEW BUSINESS

//ERRORS WHEN NAME, ADDRESS ,OR RATING IS NOT PROVIDED

//RETURNS ALL ROWS FORM BUSINESS TABLE

//RETURNS ERROR OBJECT ON ERROR

//------------ FAVORITES TABLE TESTS ------------//

//SELECT ALL FAVES

//ERROR ON INCORRECT USER ID

//RETURNS ERROR OBJECT ON ERROR

//INSERT INTO FAVES

//ERROR ON INCORECT USERID, OR USERNAME, OR BUSINESS ID

//RETURNS ERROR OBJECT ON ERROR






// resource: https://betterprogramming.pub/database-testing-made-easy-with-jest-db96ad5f1f46

//notes:
//1. name this file db.test.js, not db.js, for the jest command to run
//2. install jest globally, and locally?
//3. //the testing db user id's are still incrementing based on deleted users ids, which might be a problem
//4. db user table is 'users'
//5. db user table schema is '_id, username, password'

module.exports = db