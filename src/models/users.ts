// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// export const users= mongoose.model.users || mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export { UserModel };
