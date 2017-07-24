var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true
  }
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
  fname = this.name.split(" ");
  return fname[0];
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  lname = this.name.split(" ");
  i = lname.length;
  return lname[i-1];
});

module.exports = schema;
