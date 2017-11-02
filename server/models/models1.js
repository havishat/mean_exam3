var mongoose = require('mongoose');
var Schema = mongoose.Schema

var LoginSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter a name."], minlength: 3},
    _appointmentId: [{type: Schema.Types.ObjectId, ref:"Poll"}]
  }, {timestamps:true});

mongoose.model('Login', LoginSchema);


var AppointmentSchema = new mongoose.Schema({
  date: {type: String},
  time: {type: String},
  complain: {type: String,  required: [true, "Please enter complain."], minlength: 10},  
  creator: {type: Schema.Types.String, ref: "Poll"},

}, {timestamps:true});

mongoose.model('Poll', AppointmentSchema);