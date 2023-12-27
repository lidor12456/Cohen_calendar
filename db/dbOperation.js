const config = require("./dbConfig");
const sql = require("mssql");

const getPersons = async () => {
  try {
    let pool = await sql.connect(config);
    let persons = pool.request().query("SELECT * from Persons");
    console.log(persons);
    return persons;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { getPersons };
