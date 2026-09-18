module.exports = {
  HOST: "localhost",            // We use the host of localhost.
  USER: "[YOUR_USER]",          // Use the defined root for you DB.
  PASSWORD: "[YOUR_PASSWORD]",  // Use the defined password to access from your DB.
  DB: "library_db",             // We just use the create database library_db.
  dialect: "mysql",             // We use the dialect of mysql.
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};