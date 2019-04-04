const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
      caption: {
          type: String,
          
      },
      imgUrl: {
        type: String,
        required: true
      },
      summary: String,
      createdAt: {
          type: Date,
          default: Date.now 
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
})

module.exports = mongoose.model("Post", postSchema)