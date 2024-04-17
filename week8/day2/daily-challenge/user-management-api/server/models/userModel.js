// models/userModel.js
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'arsenal_1',
      database : 'users'
    }
  });
  

  module.exports = {
    createUser: async (username, email, password) => {
      // Start a transaction
      return knex.transaction(async trx => {
        // Insert the username and email into the users table and get the inserted user's ID
        const [userId] = await trx('users').insert({ username, email }).returning('id');
    
        // Insert the user ID and hashed password into the hashpwd table
        await trx('hashpwd').insert({ id: userId, password });
    
        // Return the user's ID, username, and email
        return { id: userId, username, email };
      });
    },
    
    
    findUserByUsername: (username) => {
      return knex('users').where({ username }).first();
    },
    getAllUsers: () => {
      return knex('users').select('*');
    },
    findUserById: (id) => {
      return knex('users').where({ id }).first();
    },
    updateUserById: (id, userData) => {
      return knex('users').where({ id }).update(userData);
    },
  };


