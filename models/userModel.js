const db = require("../config/db");

class User {
  constructor(fields) {
    // console.log({ fields });
    this.name = fields.name;
    this.age = fields.age;
  }

  async createUser() {
    let time = new Date();
    let yyyy = time.getFullYear();
    let mm = time.getMonth() + 1;
    let dd = time.getDay();
    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `INSERT INTO users(
			name,
			age,
			createdAt
		)
		VALUES(
			'${this.name}',
			'${this.age}',
			'${createdAt}'
		)`;
    let [user, _] = await db.execute(sql);
    // console.log({ user });
    return user;
  }

  static getUsers() {
    const sql = "SELECT * FROM users";
    return db.execute(sql);
  }

  static getUserById(id) {
    const sql = `SELECT * FROM users WHERE id=${id}`;
    return db.execute(sql);
  }
}
module.exports = User;
