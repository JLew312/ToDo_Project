const { sequelize } = require('./db/models');

sequelize.showAllSchemas({ loggine: false }).then(async (data) => {
  if (!data.includes(process.env.SCHEMA)) {
    await sequelize.createSchema(process.env.SCHEMA)
  }
});
