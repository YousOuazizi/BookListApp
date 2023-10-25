const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Review API",
      version: "1.0.0",
      description: "API for managing book reviews",
    },
  },
  apis: ["./routes/*.js"], // Spécifiez ici l'emplacement de vos fichiers de route
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
