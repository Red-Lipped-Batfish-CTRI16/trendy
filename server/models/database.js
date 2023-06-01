const { Pool } = require('pg');

const PG_URI =
  'postgres://fxrewxub:CDo5w-QO1JFNMApR62tsP8cKneYnp20q@rajje.db.elephantsql.com/fxrewxub';
  // 'postgres://gjvhfhjo:jCdlDHZ53fIpt5yZBdLKCQ3fDIIsnCA8@mahmud.db.elephantsql.com/gjvhfhjo';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`query ${text}`);
    return pool.query(text, params, callback);
  },
};
