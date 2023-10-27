const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String || null,
});

const UserModel = mongoose.models?.user || mongoose.model("user", userSchema);

export { UserModel };
