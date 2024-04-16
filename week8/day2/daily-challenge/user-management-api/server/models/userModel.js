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
    createUser: (username, password) => {
      return knex('users').insert({ username, password });
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