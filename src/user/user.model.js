let config = require("../../core/app.config");
let connectionManager = require("../../core/mongo.connection");

class User {
  constructor(email, password = '') {
    this.email = email;
    this.password = password;
  }

  async add(user) {
    const db = await connectionManager.getConnection();
    return db.collection(config.COLLECTIONS.users).insertOne(user);
  }

  async delete() {
    const db = await connectionManager.getConnection();
    return db
      .collection(config.COLLECTIONS.users)
      .remove({ email: this.email });
  }

  async doesUserExist() {
    const db = await connectionManager.getConnection();
    const userData = await db
      .collection(config.COLLECTIONS.users)
      .findOne({ email: this.email });
    return Boolean(userData);
  }
}

module.exports = User;
