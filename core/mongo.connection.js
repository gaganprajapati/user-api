const { MongoClient } = require("mongodb");

const {
  MONGO_URL,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  DATABASE_NAME,
} = process.env;

let connection = null;
let db = null;

async function getConnection() {
  try {
    if (db) {
      return db;
    }
    if (!connection) {
      connection = await createConnection();
    }
    return connection.db(DATABASE_NAME);
  } catch (error) {
    console.log("ConnectionManager -> catch -> error", error);
    throw error;
  }
}

async function createConnection() {
  const mongoOptions = {
    useNewUrlParser: true,
  };

  if (MONGO_USERNAME !== "" && MONGO_PASSWORD !== "") {
    mongoOptions.auth = {
      user: MONGO_USERNAME,
      password: MONGO_PASSWORD,
    };
  }
  return MongoClient.connect(MONGO_URL, mongoOptions);
}

module.exports = { getConnection };
