var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Owlist');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
  
// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ParentSchema = new Schema({
  // `title` is of type String
  Id: Int,
  Name: {type: String, required: ture},
  task: {type: String[], required: ture},
  comment:{type: String[], required: ture},
  DateCreated: {type: String, required: ture},
  DateDue: {type: String, required: ture},
});

// This creates our model from the above schema, using mongoose's model method
var Parent = mongoose.model("Owlist", ParentSchema);

// Export the Note model
module.exports = Parent;