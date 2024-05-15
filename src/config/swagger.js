const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "S3 Services",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.SERVER_PORT}`,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/swagger/*.js"],
};
module.exports = options;