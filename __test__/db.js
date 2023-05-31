//------------ REQUIRES------------//

const fs = require('fs')
const path = require('path')
const userController = require('../server/controllers/userController')

const testDbURL = 'postgres://alrdxiqa:ZwmbRlHdknDvicDqprq-r_1QK8xYsrJ9@rajje.db.elephantsql.com/alrdxiqa'
//db user table is 'users'
//db user table schema is '_id, username, password'


//------------ DB USER TESTS ------------//

//------------ PW HASH TESTS ------------//

//SUCCESSFULLY HASHES PASSWORD

//------------ ADD USER TESTS ------------//

//WRITES A VALID USER TO THE USER TABLE

//RETURNS AN ERROR WHEN USERNAME ALREADY EXISTS



//------------ LOGIN USER TESTS ------------//

//SUCCESSFULLY LOGIN WITH VALID USERNAME AND PWORD

//FAIL TO LOGIN WITH INVALID USERNAME AND PWORD




