const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      username: String,
      body: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("post", PostSchema);
