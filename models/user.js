const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  gender: String,
  createdAt: String,
});

module.exports = model("user", UserSchema);
