const sequelize = new Sequelize('database_name', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Employee = sequelize.define('employee', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    manager: {
      type: Sequelize.STRING
    }
  });
  
  Employee.sync({ force: true }).then(() => {
    console.log('Employee table created successfully');
  });

  