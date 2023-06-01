// //------------ REQUIRES------------//

// const userController = require('../server/controllers/userController')
// const {Pool} = require('pg')

// //------------ CONNECT TO TESTING DB ------------//

// const testDbURL = 'postgres://alrdxiqa:ZwmbRlHdknDvicDqprq-r_1QK8xYsrJ9@rajje.db.elephantsql.com/alrdxiqa'

// const testPool = new Pool({
//     connectionString: testDbURL
// })

// //this is labelled db because the controllers call it db

// const db = {
//     query: (text, params, callback) => {
//         console.log(`test query ${text}`)
//         return testPool.query(text, params, callback)
//     }
// }

// //------------ BEFORE/AFTER TEST FUNCTIONS  ------------//

//  async function resetDb() {
//     const string = `DELETE FROM users WHERE user_id > 0`
//     await db.query(string)
            
// }

//  async function addUsers() {
//     const string = `
//     INSERT INTO users (username, password) VALUES
//         ('test1', 'test1'),
//         ('test2', 'test2'),
//         ('test3', 'test3')
//      `
//     await db.query(string)
//  }


// const interceptor = {
//     mockRequest: () => {
//       const req = {}
//       req.body = jest.fn().mockReturnValue(req)
//       req.params = jest.fn().mockReturnValue(req)
//       return req
//     },
  
//     mockResponse: () => {
//       const res = {}
//       res.send = jest.fn().mockReturnValue(res)
//         res.status = jest.fn().mockReturnValue(res)
//         res.locals = jest.fn().mockReturnValue(res)
//       res.json = jest.fn().mockReturnValue(res)
//       return res
//     },
//     mockNext: () => jest.fn()
// }

// //------------  USER TABLE TESTS ------------//

// describe('userControllers tests', () => {
//     //refactor async .then and invoking done()
//     beforeAll((done) => {
//         addUsers()
//         done()
//         // done()
//     })
//     afterAll(done => {
//         resetDb()
//         done()
//     })
    
//     //WRITES A VALID USER TO THE USER TABLE
//     //testing db functionality used on line 27 of userController
        
//     // it('getUsers returns users', async () => {
//     //     // expect(1).toBe(1)
//     //     let req = {};
//     //     // req.params.id = 1
//     //     let res = { locals: '' }
//     //     function next(req, res) {
//     //         return
//     //     }
//     //     const result = await userController.getUsers(req, res, next());
//     //     console.log(result, res)
//     //     expect(res).toHaveLength(1)

//     // })
    
// })

// //notes:
// //1. soemtimes this file lets me write with jes, and other tiimes it doesn't.
// //for example, if I try to write it('blah blah'), it won't recognize it method from jest, and prompt a different expression
// //sometimes it won't run tests properly
// //