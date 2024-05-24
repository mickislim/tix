const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: { type: String, required: true },
   imageURL :{type:String, required:true},
   day: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  sits: {
    type: [String],
    required: true
  },
  category: {
    type: String,
    required: true
  }
 
   
});

module.exports = mongoose.model('Ticket', ticketSchema);
