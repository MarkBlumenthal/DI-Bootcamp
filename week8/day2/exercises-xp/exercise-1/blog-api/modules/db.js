const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost', 
      user: 'postgres',
      password: 'arsenal_1',
      database: 'blog'
    }
});

module.exports = {
    // query: async (text, params) => {
    //     const result = await knex.raw(text, params); 
    //     return result;
    // },
    knex 
};

