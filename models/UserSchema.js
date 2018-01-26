var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Owlist');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
  
// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is of type String
  Name: String,
  // `body` is of type String
  Password: String,

  AboutMe: String,

  Projects: String
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Article", Article);

// Export the Note model
module.exports = Note;