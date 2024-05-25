const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads directory

const ticketRouter = require('./router/ticket');


// Multer configuration


// Routes
app.use('/api/tickets', ticketRouter);

const uri = 'mongodb+srv://mikeakinyemi41:Qc8ge1K3arIvmJW3@ticketdetails.fyphnwo.mongodb.net/'
const port = process.env.PORT || 3500;
// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
   const PORT = process.env.PORT || 3500
    app.listen(port, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Ticket routes

