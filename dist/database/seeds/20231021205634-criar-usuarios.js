"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John Doe",
          email: "john@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "joao1",
          email: "john1@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "joao2",
          email: "john2@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
